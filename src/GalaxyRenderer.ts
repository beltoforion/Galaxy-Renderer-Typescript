import { mat4,  vec3 } from 'gl-matrix'

import { Color, GalaxyParam, Vec3, VertexColor, VertexStar, Star } from './Types' 
import { Helper } from './Helper'
import { VertexBufferLines } from './VertexBufferLines'
import { VertexBufferStars } from './VertexBufferStars';
import { Galaxy } from './Galaxy'

enum DisplayItem {
    NONE          = 0,
    AXIS          = 0b0000001,
    STARS         = 0b0000010,
    DENSITY_WAVES = 0b0000100,
    VELOCITY      = 0b0001000,
    DUST          = 0b0010000,
    H2            = 0b0100000,
    FILAMENTS     = 0b1000000,
}


export enum RenderUpdateHint {
    NONE = 0,
    DENSITY_WAVES = 1 << 1,
    AXIS = 1 << 2,
    STARS = 1 << 3,
    CREATE_VELOCITY_CURVE = 1 << 4
}


export class GalaxyRenderer {
    private canvas : HTMLCanvasElement;
    private gl : WebGL2RenderingContext;

	private vertDensityWaves : VertexBufferLines | null = null;
	private vertAxis : VertexBufferLines | null = null;
	private vertVelocityCurve : VertexBufferLines| null = null;
    private vertStars : VertexBufferStars | null = null;

    private _fov : number = 0;

    private matProjection : mat4 = mat4.create();
	private matView : mat4 = mat4.create();

	private camPos : vec3 = vec3.create();
	private camLookAt : vec3 = vec3.create();
	private camOrient : vec3 = vec3.create();

    private time : number = 0;
    private flags : DisplayItem = DisplayItem.STARS | DisplayItem.AXIS | DisplayItem.DUST | DisplayItem.H2 | DisplayItem.FILAMENTS;

    private _renderUpdateHint : RenderUpdateHint = RenderUpdateHint.STARS |RenderUpdateHint.DENSITY_WAVES | RenderUpdateHint.AXIS | RenderUpdateHint.CREATE_VELOCITY_CURVE;

    private _galaxy : Galaxy = new Galaxy()
    private preset : GalaxyParam[] = []

    private _timeStepSize : number = 100000.0;

    public set renderUpdateHint(hint: RenderUpdateHint)  {
        this._renderUpdateHint = hint
    }

    public get renderUpdateHint() : RenderUpdateHint {
        return this._renderUpdateHint
    }

    public get galaxy() : Galaxy {
        return this._galaxy
    }

    public get timeStep() : number {
        return this._timeStepSize
    }

    public set timeStep(ts:number) {
        this._timeStepSize = ts
    }

    public constructor(canvas : HTMLCanvasElement) {
        this.canvas = canvas;

        this.gl = this.canvas.getContext("webgl2") as WebGL2RenderingContext;
        if (this.gl === null)
            throw new Error("Unable to initialize WebGL2. Your browser may not support it.");

	    this.vertDensityWaves = new VertexBufferLines(this.gl, 2, this.gl.STATIC_DRAW);
        this.vertAxis = new VertexBufferLines(this.gl, 1, this.gl.STATIC_DRAW);
	    this.vertVelocityCurve = new VertexBufferLines(this.gl, 1, this.gl.DYNAMIC_DRAW);
        this.vertStars = new VertexBufferStars(this.gl)

        this.initGL(this.gl);
        this.initSimulation();

        // Start the main loop
        window.requestAnimationFrame((timeStamp) => this.mainLoop(timeStamp));
    }

    private dustRenderSizeBase : number = 187;

    public set fov(value : number) {
        this._fov = value;

        this.galaxy.dustRenderSize = Math.max(this.dustRenderSizeBase - 0.0026 * this._fov, 0);

        this.adjustCamera();
        this.renderUpdateHint |= RenderUpdateHint.AXIS | RenderUpdateHint.DENSITY_WAVES;
    }

    public get fov() {
        return this._fov;
    }

    public set dustRenderSize(value : number) {
        this.dustRenderSizeBase = value;
        this.galaxy.dustRenderSize = Math.max(this.dustRenderSizeBase - 0.0026 * this._fov, 0);
//        this.galaxy.dustRenderSize = value;
    }

    public get dustRenderSize() {
//        return this.galaxy.dustRenderSize;
        return this.dustRenderSizeBase;
    }

    private hasFlag(flag : DisplayItem) : boolean{
        return (this.flags & flag) != 0;
    }

    private setFlag(flag : DisplayItem, stat : boolean) : void {
        if (stat) 
            this.flags |= flag;
        else
            this.flags &= ~flag;
    }

    public get showAxis() : boolean {
        return this.hasFlag(DisplayItem.AXIS);
    }

    public set showAxis(value : boolean) {
        this.setFlag(DisplayItem.AXIS, value) 
    }
    
    public get showDensityWaves() : boolean {
        return this.hasFlag(DisplayItem.DENSITY_WAVES);
    }

    public set showDensityWaves(value : boolean) {
        this.setFlag(DisplayItem.DENSITY_WAVES, value) 
    }

    public get showDust() : boolean {
        return this.hasFlag(DisplayItem.DUST);
    }

    public set showDust(value : boolean) {
        this.setFlag(DisplayItem.DUST, value) 
    }

    public get showDustFilaments() : boolean {
        return this.hasFlag(DisplayItem.FILAMENTS);
    }

    public set showDustFilaments(value : boolean) {
        this.setFlag(DisplayItem.FILAMENTS, value) 
    }

    public get showStars() : boolean {
        return this.hasFlag(DisplayItem.STARS);
    }

    public set showStars(value : boolean) {
        this.setFlag(DisplayItem.STARS, value) 
    }

    public get showH2() : boolean {
        return this.hasFlag(DisplayItem.H2);
    }

    public set showH2(value : boolean) {
        this.setFlag(DisplayItem.H2, value) 
    }

    public get showVelocity() : boolean {
        return this.hasFlag(DisplayItem.VELOCITY);
    }

    public set showVelocity(value : boolean) {
        this.setFlag(DisplayItem.VELOCITY, value) 
    }

    public get hasDarkMatter() : boolean {
        return this.galaxy.hasDarkMatter;
    }

    public set hasDarkMatter(hasDarkMatter : boolean) {
        this.galaxy.hasDarkMatter = hasDarkMatter;
        this.renderUpdateHint |= RenderUpdateHint.STARS | RenderUpdateHint.CREATE_VELOCITY_CURVE;
    }

    public selectPreset(idx : number) : void {
        this.galaxy.reset(this.preset[idx], false);
        this.fov = this.galaxy.rad * 3;
        this.renderUpdateHint |= RenderUpdateHint.DENSITY_WAVES | RenderUpdateHint.STARS | RenderUpdateHint.CREATE_VELOCITY_CURVE;
    }

    public updateDensityWaveParam(
        coreRad : number, 
        rad : number,  
        angularOffset : number, 
        innerEx : number, 
        outterEx : number,
        pertN : number,
        pertAmp : number,
        baseTemp :number) : void {
        this.galaxy.coreRad = coreRad
        this.galaxy.rad = rad
        this.galaxy.exInner = innerEx
        this.galaxy.exOuter = outterEx
        this.galaxy.angleOffset = angularOffset
        this.galaxy.pertN = pertN
        this.galaxy.pertAmp = pertAmp
        this.galaxy.baseTemp = baseTemp
        this.renderUpdateHint |= RenderUpdateHint.DENSITY_WAVES;
    }

    private initSimulation() {
        this.preset.push(new GalaxyParam(13000, 4000, 0.0004, 0.85, 0.95, 40000, true, 2, 40, 70, 4000));
        this.preset.push(new GalaxyParam(16000, 4000, .0003, .8, .85, 40000, true, 0, 40, 58, 4500));
        this.preset.push(new GalaxyParam(13000, 4000, .00064, .9, .9, 40000, true, 0, 0, 75, 4100));
        this.preset.push(new GalaxyParam(13000, 4000, .0004, 1.35, 1.05, 40000, true, 0, 0, 70, 4500));
        this.preset.push(new GalaxyParam(13000, 4500, .0002, .65, .95, 40000, true, 3, 72, 80, 4000));
        this.preset.push(new GalaxyParam(15000, 4000, .0003, 1.45, 1.0, 40000, true, 0, 0, 80, 4500));
        this.preset.push(new GalaxyParam(14000, 12500, .0002, 0.65, 0.95, 40000, true, 3, 72, 85, 2200));
        this.preset.push(new GalaxyParam(13000, 1500, .0004, 1.1, 1.0, 40000, true, 1, 20, 80, 2800 ));
        this.preset.push(new GalaxyParam(13000, 4000, .0004, .85, .95, 40000, true, 1, 20, 80, 4500 ));
    
        this.galaxy.reset(this.preset[0], false)
        this.fov = this.galaxy.rad * 3;
    }

    private initGL(gl : WebGL2RenderingContext) : void {
        if (this.vertAxis==null)
            throw new Error("initGL(): vertAxis is null!");

        if ( this.vertDensityWaves==null)
            throw new Error("initGL(): vertDensityWaves is null!");

        if ( this.vertVelocityCurve==null)
            throw new Error("initGL(): vertVelocityCurve is null!");

        if ( this.vertStars==null)
            throw new Error("initGL(): vertStars is null!");

        this.vertAxis.initialize();
        this.vertDensityWaves.initialize();
	    this.vertVelocityCurve.initialize();
	    this.vertStars.initialize();

        // GL initialization
        gl.viewport(0, 0, this.canvas.width, this.canvas.height);

    	gl.disable(gl.DEPTH_TEST);
        this.setCameraOrientation(vec3.fromValues(0, 1, 0));
    }

    private setCameraOrientation(orient : vec3) : void {   
	    this.camOrient = orient;
	    this.adjustCamera();
    }

    private adjustCamera() : void {
	    let l : number = this.fov / 2.0;
	    let aspect : number = this.canvas.width / this.canvas.height;

	    mat4.ortho(
            this.matProjection,
    	 	-l * aspect, l * aspect, 
	     	-l, l, 
		    -l, l);
	
        mat4.lookAt(
            this.matView,
            this.camPos, 
            this.camLookAt, 
            this.camOrient);
    }

    private updateAxis() : void {
        if (this.vertAxis==null)
            throw new Error("Galaxyrenderer.updateAxis(): this.vertAxis is null!");

//        console.log("updating axis data.");

        let vert : VertexColor[] = [];
        let idx : number[] = [];

        let s : number = Math.pow(10, Math.floor((Math.log10(this.fov / 2))));
        let l : number = this.fov / 100;
        let p : number = 0;

        let r : number = 0.3;
        let g : number = 0.3;
        let b : number = 0.3;
        let a : number = 0.8;
    
        for (let i = 0; p < this.fov; ++i) {
            p += s;
            idx.push(vert.length);
            vert.push(new VertexColor(p, -l, 0, r, g, b, a));
    
            idx.push(vert.length);
            vert.push(new VertexColor( p,  l, 0, r, g, b, a ));
    
            idx.push(vert.length);
            vert.push(new VertexColor( -p, -l, 0, r, g, b, a ));
    
            idx.push(vert.length);
            vert.push(new VertexColor( -p,  0, 0, r, g, b, a ));
    
            idx.push(vert.length);
            vert.push(new VertexColor( -l, p, 0, r, g, b, a ));
    
            idx.push(vert.length);
            vert.push(new VertexColor( 0, p, 0, r, g, b, a ));
    
            idx.push(vert.length);
            vert.push(new VertexColor( -l, -p, 0, r, g, b, a ));
    
            idx.push(vert.length);
            vert.push(new VertexColor( 0, -p, 0, r, g, b, a ));
        }
    
        idx.push(vert.length);
        vert.push(new VertexColor( -this.fov, 0, 0, r, g, b, a ));
    
        idx.push(vert.length);
        vert.push(new VertexColor( this.fov, 0, 0, r, g, b, a ));
    
        idx.push(vert.length);
        vert.push(new VertexColor( 0, -this.fov, 0, r, g, b, a ));
    
        idx.push(vert.length);
        vert.push(new VertexColor( 0, this.fov, 0, r, g, b, a ));

        this.vertAxis.createBuffer(vert, idx, this.gl.LINES);
        this.renderUpdateHint &= ~RenderUpdateHint.AXIS;        
    }

    private updateDensityWaves() : void {
        if (this.vertDensityWaves==null)
            throw new Error("GalaxyRenderer.updateDensityWaves(): this.vertDensityWaves is null!")

//        console.log("updating density waves.");

        let vert : VertexColor[] = []
        let idx : number[] = []
    
        //
        // First add the density waves
        //

        const num : number = 100;
        let dr : number = this.galaxy.farFieldRad / num;
        for (let i = 0; i <= num; ++i) {
            let r : number = dr * (i + 1);
            this.addEllipsisVertices(
                vert,
                idx,
                r,
                r * this.galaxy.getExcentricity(r),
                Helper.RAD_TO_DEG * this.galaxy.getAngularOffset(r),
                this.galaxy.pertN,
                this.galaxy.pertAmp,
                new Color(1, 1, 1, 0.2));
        }

        //
        // Add three circles at the boundaries of core, galaxy and galactic medium
        //

        const pertNum : number = 0;
        const pertAmp : number = 0;
        let r : number = this.galaxy.coreRad;
        this.addEllipsisVertices(vert, idx, r, r, 0, pertNum, pertAmp, new Color(1, 1, 0, 0.5));
    
        r = this.galaxy.rad;
        this.addEllipsisVertices(vert, idx, r, r, 0, pertNum, pertAmp, new Color(0, 1, 0, 0.5 ));
    
        r = this.galaxy.farFieldRad;
        this.addEllipsisVertices(vert, idx, r, r, 0, pertNum, pertAmp, new Color(1, 0, 0, 0.5));

        this.vertDensityWaves.createBuffer(vert, idx, this.gl.LINE_STRIP);
    
        this.renderUpdateHint &= ~RenderUpdateHint.DENSITY_WAVES;
    }

    private addEllipsisVertices(
        vert : VertexColor[],
        vertIdx : number[],
        a : number,
        b : number,
        angle : number,
        pertNum : number,
        pertAmp : number,
        col : Color) : void
    {
        const steps : number = 100;
        const x : number = 0;
        const y : number = 0;
        
        // Angle is given by Degree Value
        let beta : number = -angle * Helper.DEG_TO_RAD;
        let sinbeta : number = Math.sin(beta);
        let cosbeta : number = Math.cos(beta);
    
        let firstPointIdx : number = vert.length;
        for (let i = 0; i < 360; i += 360 / steps)
        {
            let alpha : number = i * Helper.DEG_TO_RAD;
            let sinalpha = Math.sin(alpha);
            let cosalpha = Math.cos(alpha);
    
            let fx : number = x + (a * cosalpha * cosbeta - b * sinalpha * sinbeta);
            let fy : number = y + (a * cosalpha * sinbeta + b * sinalpha * cosbeta);
    
            if (pertNum > 0)
            {
                fx += ((a / pertAmp) * Math.sin(alpha * 2 * pertNum));
                fy += ((a / pertAmp) * Math.cos(alpha * 2 * pertNum));
            }
    
            vertIdx.push(vert.length);
    
            let vc : VertexColor = new VertexColor(fx, fy, 0, col.r, col.g, col.b, col.a);
            vert.push(vc);
        }
    
        // Close the loop and reset the element index array
        vertIdx.push(firstPointIdx);
        vertIdx.push(4294967295); 
    }
    
    private updateStars() : void {
        if (this.vertStars==null)
            throw new Error("GalaxyRenderer.updateStars(): this.vertStars is null!")

        console.log("updating stars.");

        let vert : VertexStar[] = [];
        let idx : number[] = [];

        this.galaxy.reset(null, true)
        let stars : Star[] = this.galaxy.stars;
    
        let a : number = 1;
        for (let i = 1; i < stars.length; ++i)
        {
            let col : Color = Helper.colorFromTemperature(stars[i].temp);
            col.a = a;
    
            idx.push(vert.length);
            vert.push(new VertexStar(stars[i], col));
        }

        this.vertStars.createBuffer(vert, idx, this.gl.POINTS);
        this.renderUpdateHint &= ~RenderUpdateHint.STARS;
    }

    private updateVelocityCurve() : void {
        if (this.vertVelocityCurve==null)
            throw new Error("GalaxyRenderer.updateVelocityCurve(): this.vertVelocityCurve is null!")

//        console.log("updating velocity curves.");

        let vert : VertexColor[] = [];
	    let idx : number[] = [];
        let cr : number= 0.5, cg : number= 1, cb : number= 1, ca : number= 1;
        
	    for (let r = 0; r < this.galaxy.farFieldRad; r += 100) {
            let v : number = (this.galaxy.hasDarkMatter) 
                ? Helper.velocityWithDarkMatter(r)
                : Helper.velocityWithoutDarkMatter(r)
               
            idx.push(vert.length);
            vert.push(new VertexColor(r,v * 10, 0,  cr, cg, cb, ca));
	    }

        this.vertVelocityCurve.createBuffer(vert, idx, this.gl.POINTS);
        this.renderUpdateHint &= ~RenderUpdateHint.CREATE_VELOCITY_CURVE;
    }   

    private update() : void {
        this.time += this.timeStep;

        if ((this.renderUpdateHint & RenderUpdateHint.AXIS) != 0)
            this.updateAxis();

        if ((this.renderUpdateHint & RenderUpdateHint.DENSITY_WAVES) != 0)
            this.updateDensityWaves();

        if ((this.renderUpdateHint & RenderUpdateHint.STARS) != 0)
            this.updateStars();

        if ((this.renderUpdateHint & RenderUpdateHint.CREATE_VELOCITY_CURVE) != 0)
            this.updateVelocityCurve();

        this.camOrient = vec3.fromValues(0, 1, 0 );
        this.camPos = vec3.fromValues(0, 0, 5000);
        this.camLookAt = vec3.fromValues(0, 0, 0);
    }

    private render() {
        this.gl.clearColor(0.0, 0.0, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.adjustCamera();

        if (this.vertAxis!=null && this.flags & DisplayItem.AXIS)
            this.vertAxis.draw(this.matView, this.matProjection);

        let features : number = 0;
        if (this.flags & DisplayItem.STARS)
            features |= 1 << 0;
    
        if (this.flags & DisplayItem.DUST)
            features |= 1 << 1;
    
        if (this.flags & DisplayItem.FILAMENTS)
            features |= 1 << 2;
    
        if (this.flags & DisplayItem.H2)
            features |= 1 << 3;

        if (this.vertStars!=null && features != 0)
        {
            this.vertStars.updateShaderVariables(this.time, this.galaxy.pertN, this.galaxy.pertAmp, this.galaxy.dustRenderSize, features);
            this.vertStars.draw(this.matView, this.matProjection);
        }

        if (this.vertDensityWaves!=null && this.flags & DisplayItem.DENSITY_WAVES)
            this.vertDensityWaves.draw(this.matView, this.matProjection);
    
        if (this.vertVelocityCurve!=null && this.flags & DisplayItem.VELOCITY)
            this.vertVelocityCurve.draw(this.matView, this.matProjection);
    }

    public mainLoop(timestamp : any) {
        let error : boolean = false;
        try
        {
            this.update();
            this.render();
        }
        catch(error)
        {
            if (error instanceof Error) {
                console.log(error.message);
            }
            error = true;
        }
        finally
        {
            if (!error)
                window.requestAnimationFrame( (timestamp) => this.mainLoop(timestamp) );
        }
    }

}
