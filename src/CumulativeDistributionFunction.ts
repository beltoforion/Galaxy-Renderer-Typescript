export class CumulativeDistributionFunction
{
    public constructor() {
    }

    public probFromVal(fVal : number) : number
    {
        if (fVal < this.min || fVal > this.max)
		    throw new Error("out of range");

    	let h : number = 2 * ((this.max - this.min) / this.steps);
	    let i : number = ((fVal - this.min) / h);
	    let remainder : number = fVal - i * h;

	    return (this.y1[i] + this.m1[i] * remainder);
    }

    public valFromProb(fVal : number) : number
    {
        if (fVal < 0 || fVal>1)
		    throw new Error("out of range");

	    let h : number  = 1.0 / (this.y2.length - 1);
	    let i : number = Math.floor(fVal / h);
	    let remainder = fVal - i * h;

    	return (this.y2[i] + this.m2[i] * remainder);
    }

    public setupRealistic(
        i0 : number, 
        k : number, 
        a : number, 
        rad_bulge : number, 
        min : number, 
        max : number, 
        nsteps : number) : void
    {
        this.min = min;
        this.max = max;
        this.steps = nsteps;
    
        this.i0 = i0;
        this.k = k;
        this.a = a;
        this.r_bulge = rad_bulge;
    
        this.buildCdf(nsteps);
    }

	private min : number = 0;
	private max : number = 0;
	private width : number = 0;
	private steps : number = 0;

	private i0: number = 0;
	private k: number = 0;
	private a: number = 0;
	private r_bulge: number = 0;

	private m1 : number[] = [];
	private y1 : number[] = [];
	private x1 : number[] = [];

	private m2 : number[] = [];
	private y2 : number[] = [];
	private x2 : number[] = [];

    private buildCdf(nsteps : number) : void
    {
        let h : number = (this.max - this.min) / this.steps;
        let x : number = 0;
        let y : number = 0;
    
        this.x1 = [];
        this.y1 = [];
        this.x2 = [];
        this.y2 = [];
        this.m1 = [];
        this.m2 = [];
    
        // Simpson rule for integration of the distribution function
        this.y1.push(0.0);
        this.x1.push(0.0);
        for (let i = 0; i < this.steps; i += 2) {
            x = h * (i + 2);
            y += h / 3 * (this.intensity(this.min + i * h) + 4 * this.intensity(this.min + (i + 1) * h) + this.intensity(this.min + (i + 2) * h));
    
            this.m1.push((y - this.y1[this.y1.length-1]) / (2 * h));
            this.x1.push(x);
            this.y1.push(y);
    
            //    printf("%2.2f, %2.2f, %2.2f\n", m_fMin + (i+2) * h, v, h);
        }
        this.m1.push(0.0);
    
        // all arrays must have the same length
        if (this.m1.length != this.x1.length || this.m1.length != this.y1.length)
            throw new Error("CumulativeDistributionFunction::BuildCDF: array size mismatch (1)!");
    
        // normieren
        for (let i = 0; i < this.y1.length; ++i)
        {
            this.y1[i] /= this.y1[this.y1.length-1];
            this.m1[i] /= this.y1[this.y1.length-1];
        }
    
        this.x2.push(0.0);
        this.y2.push(0.0);
    
        let p : number = 0;
        h = 1.0 / nsteps;
        for (let i = 1, k = 0; i < nsteps; ++i)
        {
            p = i * h;
    
            for (; this.y1[k + 1] <= p; ++k)
            {
            }
    
    
            y = this.x1[k] + (p - this.y1[k]) / this.m1[k];
    
            //    printf("%2.4f, %2.4f, k=%d, %2.4f, %2.4f\n", p, y, k, m_vY1[k], m_vM1[k]);
    
            this.m2.push((y - this.y2[this.y2.length-1]) / h);
            this.x2.push(p);
            this.y2.push(y);
        }
        this.m2.push(0.0);
    
        // all arrays must have the same length
        if (this.m2.length != this.x2.length || this.m2.length != this.y2.length)
            throw new Error("CumulativeDistributionFunction::BuildCDF: array size mismatch (1)!");
    }

    private intensityBulge(r : number, i0 : number, k : number) : number
    {
        return i0 * Math.exp(-k * Math.pow(r, 0.25));
    }
    
    private intensityDisc(r : number, i0 : number, a : number) : number
    {
        return i0 * Math.exp(-r / a);
    }

    private intensity(x : number) : number
    {
        return (x < this.r_bulge) 
            ? this.intensityBulge(x, this.i0, this.k) 
            : this.intensityDisc(x - this.r_bulge, this.intensityBulge(this.r_bulge, this.i0, this.k), this.a);
    }
};
