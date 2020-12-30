import { mat4 } from 'gl-matrix'

import { Vec3, Color, VertexStar, Star } from './Types'
import { VertexBufferBase, AttributeDefinition } from './VertexBufferBase'


export class VertexBufferStars extends VertexBufferBase<VertexStar>
{
	private pertN : number = 0;
	private dustSize : number = 0;
	private pertAmp : number = 0;
	private time : number = 0;
	private blendFunc : number = 0;
	private blendEquation : number = 0;
    private displayFeatures : number = 0;

    private readonly attTheta0 : number = 0;
    private readonly attVelTheta : number = 1;
    private readonly attTiltAngle : number = 2;
    private readonly attSemiMajorAxis : number = 3;
    private readonly attSemiMinorAxis : number = 4;
    private readonly attTemperature : number = 5;
    private readonly attMagnitude : number = 6;
    private readonly attType : number = 7;
    private readonly attColor : number = 8;

    constructor(gl : WebGL2RenderingContext)
    {
        super(gl, gl.STATIC_DRAW)

        this.blendFunc = this.gl.ONE;
        this.blendEquation = this.gl.FUNC_ADD;

        this.defineAttributes([
            new AttributeDefinition(this.attTheta0,        1, 0),
            new AttributeDefinition(this.attVelTheta,      1, 4),
            new AttributeDefinition(this.attTiltAngle,     1, 8),
            new AttributeDefinition(this.attSemiMajorAxis, 1, 12),
            new AttributeDefinition(this.attSemiMinorAxis, 1, 16),
            new AttributeDefinition(this.attTemperature,   1, 20),
            new AttributeDefinition(this.attMagnitude,     1, 24),
            new AttributeDefinition(this.attType,          1, 28),
            new AttributeDefinition(this.attColor,         4, 32)
        ]);
    }

    public updateShaderVariables(time : number, num : number, amp : number, dustSize : number, displayFeatures : number) : void
	{
		this.pertN = num;
		this.pertAmp = amp;
		this.time = time;
		this.dustSize = dustSize;
		this.displayFeatures = displayFeatures;
	}

	protected getVertexShaderSource() : string
	{
        return `#version 300 es

#define DEG_TO_RAD 0.01745329251

uniform mat4 projMat;
uniform mat4 viewMat;

uniform int pertN;
uniform int dustSize;
uniform int displayFeatures;
uniform float pertAmp;
uniform float time;

layout(location = 0) in float theta0;
layout(location = 1) in float velTheta;
layout(location = 2) in float tiltAngle;
layout(location = 3) in float a;
layout(location = 4) in float b;
layout(location = 5) in float temp;
layout(location = 6) in float mag;
layout(location = 7) in float type;
layout(location = 8) in vec4 color;

out vec4 vertexColor;

out float vertexType;
flat out int features;

vec2 calcPos(float a, float b, float theta, float velTheta, float time, float tiltAngle) {
    float thetaActual = theta + velTheta * time;
    float beta = -tiltAngle;
    float alpha = thetaActual * DEG_TO_RAD;
    float cosalpha = cos(alpha);
    float sinalpha = sin(alpha);
    float cosbeta = cos(beta);
    float sinbeta = sin(beta);
    vec2 center = vec2(0,0);
    vec2 ps = vec2(center.x + (a * cosalpha * cosbeta - b * sinalpha * sinbeta),
                   center.y + (a * cosalpha * sinbeta + b * sinalpha * cosbeta));
    if (pertAmp > 0.0 && pertN > 0) {
        ps.x += (a / pertAmp) * sin(alpha * 2.0 * float(pertN));
        ps.y += (a / pertAmp) * cos(alpha * 2.0 * float(pertN));
    }
return ps;
}

void main()
{
    vec2 ps = calcPos(a, b, theta0, velTheta, time, tiltAngle);

    if (type==0.0) {
        gl_PointSize = mag * 4.0;
        vertexColor = color * mag;
    } else if (type==1.0) {	
        gl_PointSize = mag * 5.0 * float(dustSize);
        vertexColor = color * mag;
    } else if (type==2.0) {
        gl_PointSize = mag * 2.0 * float(dustSize);
        vertexColor = color * mag;
    } else if (type==3.0) {
        vec2 ps2 = calcPos(a + 1000.0, b, theta0, velTheta, time, tiltAngle);
        float dst = distance(ps, ps2);
        float size = ((1000.0 - dst) / 10.0) - 50.0;
        gl_PointSize = size;
        vertexColor = color * mag * vec4(2.0, 0.5, 0.5, 1.0);
    } else if (type==4.0) {
        vec2 ps2 = calcPos(a + 1000.0, b, theta0, velTheta, time, tiltAngle);
        float dst = distance(ps, ps2);
        float size = ((1000.0 - dst) / 10.0) - 50.0;
        gl_PointSize = size/10.0;
        vertexColor = vec4(1.0,1.0,1.0,1.0);
    }
    gl_Position =  projMat * vec4(ps, 0.0, 1.0);
    vertexType = type;
    features = displayFeatures;
}`;
	}

	protected getFragmentShaderSource() : string
	{
        return `#version 300 es

precision mediump float;

in vec4 vertexColor;

in float vertexType;
flat in int features;

out vec4 FragColor;

void main()
{
    if (vertexType==0.0) {
        if ( (features & 1) ==0)
            discard;
        FragColor = vertexColor;
        vec2 circCoord = 2.0 * gl_PointCoord - 1.0;
        float alpha = 1.0 - length(circCoord);
        FragColor = vec4(vertexColor.xyz, alpha);
    } else if (vertexType==1.0) {
        if ( (features & 2) ==0)
            discard;
        vec2 circCoord = 2.0 * gl_PointCoord - 1.0;
        float alpha = 0.05 * (1.0 - length(circCoord));
        FragColor = vec4(vertexColor.xyz, alpha);
    } else if (vertexType==2.0) {
        if ( (features & 4) ==0)
            discard;
        vec2 circCoord = 2.0 * gl_PointCoord - 1.0;
        float alpha = 0.07 * (1.0 - length(circCoord));
        FragColor = vec4(vertexColor.xyz, alpha);
    } else if (vertexType==3.0) {
        if ((features & 8) == 0)
            discard;
        vec2 circCoord = 2.0 * gl_PointCoord - 1.0;
        float alpha = 1.0 - length(circCoord);
        FragColor = vec4(vertexColor.xyz, alpha);
    } else if (vertexType==4.0) {
        if ((features & 8)== 0)
            discard;
        vec2 circCoord = 2.0 * gl_PointCoord - 1.0;
        float alpha = 1.0 - length(circCoord);
        FragColor = vec4(vertexColor.xyz, alpha);
    }
}`;
    }
    
    protected onSetCustomShaderVariables() : void
	{
        if (this.shaderProgram==null)
            throw new Error("onSetCustomShaderVariables(): Shader program is null!");

		let varDustSize = this.gl.getUniformLocation(this.shaderProgram, "dustSize");
		this.gl.uniform1i(varDustSize, this.dustSize);

		let varPertN = this.gl.getUniformLocation(this.shaderProgram, "pertN");
		this.gl.uniform1i(varPertN, this.pertN);

		let varPertAmp = this.gl.getUniformLocation(this.shaderProgram, "pertAmp");
		this.gl.uniform1f(varPertAmp, this.pertAmp);

		let varTime = this.gl.getUniformLocation(this.shaderProgram, "time");
		this.gl.uniform1f(varTime, this.time);

		let varDisplayFeatures = this.gl.getUniformLocation(this.shaderProgram, "displayFeatures");
		this.gl.uniform1i(varDisplayFeatures, this.displayFeatures);
    }
    
    public draw(matView : mat4, matProjection: mat4) : void
	{
        if (this.shaderProgram==null)
            throw new Error("draw(...): Shader program is null!");

		this.gl.useProgram(this.shaderProgram);

		let viewMatIdx = this.gl.getUniformLocation(this.shaderProgram, "viewMat");
		this.gl.uniformMatrix4fv(viewMatIdx, false, matView);

		let projMatIdx = this.gl.getUniformLocation(this.shaderProgram, "projMat");
		this.gl.uniformMatrix4fv(projMatIdx, false, matProjection);

		this.onSetCustomShaderVariables();

		this.gl.enable(this.gl.BLEND);
		this.gl.blendFunc(this.gl.SRC_ALPHA, this.blendFunc);
		this.gl.blendEquation(this.blendEquation);
        
        this.onBeforeDraw();

		this.gl.bindVertexArray(this.vertexArrayObject);
		this.gl.drawElements(this.primitiveType, this.arrayElementCount, this.gl.UNSIGNED_INT, 0);
		this.gl.bindVertexArray(null);

		this.gl.disable(this.gl.BLEND);
		this.gl.blendEquation(this.gl.FUNC_ADD);
		this.gl.useProgram(null);
	}
}
