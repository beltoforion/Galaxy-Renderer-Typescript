import { Star, GalaxyParam } from './Types'
import { Helper } from './Helper'
import { CumulativeDistributionFunction } from './CumulativeDistributionFunction'

export class Galaxy {

    private _stars : Star[] = [];
	private _elEx1 : number = 0;
	private _elEx2 : number = 0;

	private _angleOffset : number = 0;

    private _radCore : number = 0;
	private _radGalaxy : number = 0;
	private _radFarField : number = 0;
  
    private _dustRenderSize : number = 0;

	private _numStars : number = 0;
	private _numH2 : number = 0;

	private _pertN : number = 0;
	private _pertAmp : number = 0;

	private _hasDarkMatter : boolean = true;
	private _baseTemp : number = 0;

    constructor(
            rad : number = 15000,
            radCore : number = 6000,
            deltaAng : number = 0.019,
            ex1 : number = 0.8,
            ex2 : number = 1,
            numStars : number = 60000)
    {
        this._elEx1 = ex1
        this._elEx2 = ex2
        this._angleOffset = deltaAng
        this._radCore = radCore
        this._radGalaxy = rad
        this._radFarField = rad * 2
        this._numStars =  numStars
        this._numH2 = 400
        this._pertN = 0
        this._pertAmp = 0
        this._hasDarkMatter = true
        this._baseTemp = 4000
        this._stars = []
        this._dustRenderSize = 70
    }

    private initStarsAndDust() : void
    {
        this._stars = [];
    
        // First star ist the black hole at the centre
        let star : Star = {
            "a" : 0,
            "b" : 0,
            "tiltAngle" : 0,
            "theta0" : 0,
            "velTheta" : 0,
            "type" : 0,
            "temp" : 6000, 
            "mag" : 1
        };

        this._stars.push(star);
    
        //
        // 1.) Initialize the stars
        //
    
        let cdf : CumulativeDistributionFunction = new CumulativeDistributionFunction();
        cdf.setupRealistic(
            1.0,				    // maximum intensity
            0.02,				    // k (bulge)
            this._radGalaxy / 3.0,	// disc scale length
            this._radCore,			// bulge radius
            0,					    // start  of the intnesity curve
            this._radFarField,		// end of the intensity curve
            1000);				    // number of supporting points

        for (let i = 1; i < this._numStars; ++i)
        {
            let rad : number = cdf.valFromProb(Helper.rnum());
            let star = new Star();
            star.a = rad;
            star.b = rad * this.getExcentricity(rad);
            star.tiltAngle = this.getAngularOffset(rad);
            star.theta0 = 360.0 * Helper.rnum();
            star.velTheta = this.getOrbitalVelocity(rad);
            star.temp = 6000 + (4000 * Helper.rnum() - 2000);
            star.mag = 0.1 + 0.4 * Helper.rnum();
            star.type = 0;
    
            // Make a small portion of the stars brighter
            if (i < this._numStars / 60)
            {
                star.mag = Math.min(star.mag + 0.1 + Helper.rnum() * 0.4, 1.0);
            }
    
            this._stars.push(star);
        }

        //
        // 2.) Initialise Dust:
        //
        //	The galaxy gets as many dust clouds as stars
    
        let x : number = 0;
        let y : number = 0;
        let rad : number = 0;
        for (let i = 0; i < this._numStars; ++i)
        {
            if (i % 2 == 0)
            {
                rad = cdf.valFromProb(Helper.rnum());
            }
            else
            {
                x = 2 * this._radGalaxy * Helper.rnum() - this._radGalaxy;
                y = 2 * this._radGalaxy * Helper.rnum() - this._radGalaxy;
                rad = Math.sqrt(x * x + y * y);
            }
    
            let dustParticle : Star = new Star();
            dustParticle.a = rad;
            dustParticle.b = rad * this.getExcentricity(rad);
            dustParticle.tiltAngle = this.getAngularOffset(rad);
            dustParticle.theta0 = 360.0 * Helper.rnum();
            dustParticle.velTheta = this.getOrbitalVelocity((dustParticle.a + dustParticle.b) / 2.0);
            dustParticle.type = 1;
    
            // I want the outer parts to appear blue, the inner parts yellow. I'm imposing
            // the following temperature distribution (no science here it just looks right)
            dustParticle.temp = this._baseTemp + rad / 4.5;
            dustParticle.mag = 0.02 + 0.15 * Helper.rnum();
            this._stars.push(dustParticle);
        }
    
        //
        // 3.) Initialize additional dust filaments
        //
    
        for (let i = 0; i < this._numStars / 100; ++i)
        {
            rad = cdf.valFromProb(Helper.rnum());
    
            x = 2 * this._radGalaxy * Helper.rnum() - this._radGalaxy;
            y = 2 * this._radGalaxy * Helper.rnum() - this._radGalaxy;
            rad = Math.sqrt(x * x + y * y);
    
            let theta : number = 360.0 * Helper.rnum();
            let mag : number= 0.1 + 0.05 * Helper.rnum();
            let num : number= 100 * Helper.rnum();

            for (let i = 0; i < num; ++i)
            {
                rad = rad + 200 - 400 * Helper.rnum();
                let dustParticle : Star = new Star();
                dustParticle.a = rad;
                dustParticle.b = rad * this.getExcentricity(rad);
                dustParticle.tiltAngle = this.getAngularOffset(rad);
                dustParticle.theta0 = theta + 10 - 20 * Helper.rnum();
                dustParticle.velTheta = this.getOrbitalVelocity((dustParticle.a + dustParticle.b) / 2.0);
    
                // I want the outer parts to appear blue, the inner parts yellow. I'm imposing
                // the following temperature distribution (no science here it just looks right)
                dustParticle.temp = this._baseTemp + rad / 4.5 - 1000;;
                dustParticle.mag = mag + 0.025 * Helper.rnum();
                dustParticle.type = 2;
                this._stars.push(dustParticle);
            }
        }

        //
        // 4.) Initialise H2 regions
        // 
    
        for (let i = 0; i < this._numH2; ++i)
        {
            x = 2 * this._radGalaxy * Helper.rnum() - this._radGalaxy;
            y = 2 * this._radGalaxy * Helper.rnum() - this._radGalaxy;
            rad = Math.sqrt(x * x + y * y);
    
            let particleH2 : Star = new Star();
            particleH2.a = rad;
            particleH2.b = rad * this.getExcentricity(rad);
            particleH2.tiltAngle = this.getAngularOffset(rad);
            particleH2.theta0 = 360.0 * Helper.rnum();
            particleH2.velTheta = this.getOrbitalVelocity((particleH2.a + particleH2.b) / 2.0);
            particleH2.temp = 6000 + (6000 * Helper.rnum()) - 3000;
            particleH2.mag = 0.1 + 0.05 * Helper.rnum();
            particleH2.type = 3;
    
            this._stars.push(particleH2);
    
            // Push particle again with type 4 (bright red core of an h2 region)
            let particleH2Highlight = new Star();
            particleH2Highlight.a = particleH2.a;
            particleH2Highlight.b = particleH2.b;
            particleH2Highlight.tiltAngle = particleH2.tiltAngle;
            particleH2Highlight.theta0 = particleH2.theta0;
            particleH2Highlight.velTheta = particleH2.velTheta;
            particleH2Highlight.temp = particleH2.temp;
            particleH2Highlight.mag = particleH2.mag;
            particleH2Highlight.type = 4;
            this._stars.push(particleH2Highlight);
        }
    }
        
    public reset(param: GalaxyParam | null = null, recomputeStars : boolean) : void 
    {
        if (param != null) {
            this._baseTemp = param.baseTemp;
            this._elEx1 = param.ex1;
            this._elEx2 = param.ex2;
            this._elEx2 = param.ex2;
            this._angleOffset = param.deltaAng;
            this._radCore = param.radCore;
            this._radGalaxy = param.rad;
            this._radFarField = param.rad * 2;  // there is no science behind this threshold it just looks nice
            this._numStars = param.numStars;
            this._dustRenderSize = param.dustRenderSize;
            this._hasDarkMatter = param.hasDarkMatter;
            this._pertN = param.pertN;
            this._pertAmp = param.pertAmp;
        }

        if (recomputeStars)
            this.initStarsAndDust();
    }

    get stars() : Star[]
    {
        return this._stars;
    }

    get rad() : number
    {
        return this._radGalaxy;
    }

    set rad(value:number)
    {
        this._radGalaxy = value;
        this._radFarField = value * 2;
    }

    get coreRad() : number 
    {
        return this._radCore;
    }

    set coreRad(value:number)
    {
        this._radCore = value;
    }

    get farFieldRad() : number 
    {
        return this._radFarField;
    }

    public getExcentricity(r: number) : number 
    {
        if (r < this._radCore)
        {
            // Core region of the galaxy. Innermost part is round
            // excentricity increasing linear to the border of the core.
            return 1 + (r / this._radCore) * (this._elEx1 - 1);
        }
        else if (r > this._radCore && r <= this._radGalaxy)
        {
            return this._elEx1 + (r - this._radCore) / (this._radGalaxy - this._radCore) * (this._elEx2 - this._elEx1);
        }
        else if (r > this._radGalaxy && r < this._radFarField)
        {
            // excentricity is slowly reduced to 1.
            return this._elEx2 + (r - this._radGalaxy) / (this._radFarField - this._radGalaxy) * (1 - this._elEx2);
        }
        else
            return 1;
    }

    public getOrbitalVelocity(rad : number) : number 
    {
        let vel_kms : number = 0;  // velovity in kilometer per seconds
        if (this._hasDarkMatter)
        {
            vel_kms = Helper.velocityWithDarkMatter(rad);
        }
        else
        {
            vel_kms = Helper.velocityWithoutDarkMatter(rad);
        }
    
        // Calculate velocity in degree per year
        let u : number = 2.0 * Math.PI * rad * Helper.PC_TO_KM;
        let time : number = u / (vel_kms * Helper.SEC_PER_YEAR);
    
        return 360.0 / time;
    }

    public getAngularOffset(rad:number) : number {
        return rad * this._angleOffset;
    }

    public get angleOffset() : number {
        return this._angleOffset;
    }

    public set angleOffset(angle:number)  {
        this._angleOffset = angle;
    }

    public get exInner() : number {
        return this._elEx1;
    }

    public set exInner(ex:number)  {
        this._elEx1 = ex;
    }

    public get exOuter() : number {
        return this._elEx2
    }

    public set exOuter(ex:number)  {
        this._elEx2 = ex;
    }

    public get dustRenderSize() : number {
        return this._dustRenderSize
    }

    public set dustRenderSize(value : number) {
        this._dustRenderSize = value
    }

    public get pertN() : number {
	    return this._pertN
    }

    public set pertN(pertN:number) {
	    this._pertN = pertN
    }

    public get pertAmp() : number {
        return this._pertAmp
    }

    public set pertAmp(pertAmp:number) {
	    this._pertAmp = pertAmp
    }

    public get baseTemp() : number {
        return this._baseTemp
    }

    public set baseTemp(baseTemp:number) {
	    this._baseTemp = baseTemp
    }

    public get hasDarkMatter() : boolean {
        return this._hasDarkMatter
    }

    public set hasDarkMatter(hasDarkMatter : boolean) {
        this._hasDarkMatter = hasDarkMatter
        this.initStarsAndDust()
    }
}