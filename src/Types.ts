export class Vec2 {
    public x : number = 0;
    public y : number = 0;
}

export class Vec3 {
    constructor(x : number = 0, y : number = 0,z : number = 0)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public x : number = 0;
    public y : number = 0;
    public z : number = 0;
}

export class Color {
    constructor(r: number = 1, g:number = 1, b:number = 1, a:number = 0)
    {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    public r : number = 0;
    public g : number = 0;
    public b : number = 0;
    public a : number = 0;
}

export class Star {
	public theta0 : number = 0;    // initial angular position on the ellipse
	public velTheta: number = 0;   // angular velocity
	public tiltAngle: number = 0;  // tilt angle of the ellipse
	public a: number = 0;          // kleine halbachse
	public b: number = 0;          // große halbachse
	public temp: number = 0;       // star temperature
	public mag: number = 0;       // brightness;
	public type: number = 0;	   // Type 0:star, 1:dust, 2 and 3: h2 regions	
}

export class GalaxyParam {
    constructor(
        rad : number, 
        radCore : number, 
        deltaAng : number, 
        ex1 : number, 
        ex2 : number, 
        numStars : number, 
        hasDarkMatter:boolean,
        pertN : number,
        pertAmp : number,
        dustRenderSize : number,
        baseTemp : number) {
        this.rad = rad
        this.radCore = radCore
        this.deltaAng = deltaAng
        this.ex1 = ex1
        this.ex2 = ex2
        this.numStars = numStars
        this.hasDarkMatter = hasDarkMatter
        this.pertN = pertN
        this.pertAmp = pertAmp
        this.dustRenderSize = dustRenderSize
        this.baseTemp = baseTemp
    }

    public rad : number = 0
    public radCore : number = 0
    public deltaAng : number = 0
    public ex1 : number = 0
    public ex2 : number = 0
    public numStars : number = 0
    public hasDarkMatter : boolean = true
    public pertN : number = 0
    public pertAmp : number = 0
    public dustRenderSize : number = 0
    public baseTemp : number = 0
}

export abstract class VertexBase {
    constructor() {}

    public abstract writeTo(array : Float32Array, offset : number) : void
    public abstract numberOfFloats() : number;
}

export class VertexColor extends VertexBase
{
    constructor(x : number, y : number, z : number, r : number, g : number, b : number, a : number)
    {
        super()

        this.pos.x = x
        this.pos.y = y
        this.pos.z = z

        this.col.r = r
        this.col.g = g
        this.col.b = b
        this.col.a = a        
    }

	public pos : Vec3 = new Vec3();
    public col : Color = new Color(0,0,0,0);

    public numberOfFloats() : number {
        return 7
    }

    public writeTo(array : Float32Array, offset : number) {
        array[offset + 0] = this.pos.x;
        array[offset + 1] = this.pos.y;
        array[offset + 2] = this.pos.z;

        array[offset + 3] = this.col.r;
        array[offset + 4] = this.col.g;
        array[offset + 5] = this.col.b;
        array[offset + 6] = this.col.a;
    }
};

export class VertexStar extends VertexBase
{
    
	public star : Star = new Star()
    public col : Color = new Color()

    constructor(star : Star, col : Color) {
        super()

        this.star = star
        this.col = col
    }

    public numberOfFloats() : number {
        return 8 + 4;
    }
    
    public writeTo(array : Float32Array, offset : number) {
        array[offset + 0] = this.star.theta0
        array[offset + 1] = this.star.velTheta
        array[offset + 2] = this.star.tiltAngle
        array[offset + 3] = this.star.a
        array[offset + 4] = this.star.b
        array[offset + 5] = this.star.temp
        array[offset + 6] = this.star.mag
        array[offset + 7] = this.star.type

        array[offset + 8] = this.col.r
        array[offset + 9] = this.col.g
        array[offset + 10] = this.col.b
        array[offset + 11] = this.col.a
    }
};


