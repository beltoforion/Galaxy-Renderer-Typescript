import { GalaxyRenderer, RenderUpdateHint } from "./GalaxyRenderer";
import { Galaxy } from "./Galaxy";



export class UiController {
    private renderer : GalaxyRenderer

    private rad : number = 0
    private coreRad : number= 0
    private exInner : number= 0
    private exOuter : number= 0
    private angleOffset : number= 0
    private pertN : number = 0
    private pertAmp : number = 0
    private baseTemp : number = 0

    private _isEditMode : boolean = false

    private renderState : boolean[] = []

    constructor(renderer : GalaxyRenderer) {
        this.renderer = renderer

        this.updateFromGalaxy()
    }

    private set isEditMode(mode: boolean)  {
        if (this._isEditMode == mode)
            return

        if (this._isEditMode==false)
            this.enterEditMode();
        else if (this._isEditMode==true)
            this.leaveEditMode();
    }

    private get galaxy() : Galaxy {
        return this.renderer.galaxy
    }

    // Update Ui Controller from galaxy
    public updateFromGalaxy() : void {
        this.rad = this.galaxy.rad
        this.coreRad = this.galaxy.coreRad / this.galaxy.rad
        this.exInner = this.galaxy.exInner
        this.exOuter = this.galaxy.exOuter
        this.angleOffset = this.galaxy.angleOffset
        this.pertN = this.galaxy.pertN
        this.pertAmp = this.galaxy.pertAmp
        this.baseTemp = this.galaxy.baseTemp
    }

    // Update galaxy from Ui Controller
    private updateToGalaxy() : void  {
         this.renderer.updateDensityWaveParam(
             this.coreRad * this.rad,
             this.rad,
             this.angleOffset,
             this.exInner,
             this.exOuter,
             this.pertN,
             this.pertAmp,
             this.baseTemp);
    }

    private leaveEditMode() : void {
        if (!this._isEditMode)
            return

        console.log("leaving edit mode")

        try
        {
            this.renderer.showDensityWaves = this.renderState[0];
            this.renderer.showH2 = this.renderState[1];
            this.renderer.showDust = this.renderState[2];
            this.renderer.showStars = this.renderState[3];
            this.renderer.showVelocity = this.renderState[4];
            this.renderer.showDustFilaments = this.renderState[5];
            
            this.renderState = []
        }
        finally
        {
            this._isEditMode = false
            this.renderer.renderUpdateHint |= RenderUpdateHint.STARS
        }
    }

    private enterEditMode() : void {
        if (this._isEditMode)
            return

        console.log("entering edit mode")

        try
        {
            this.renderState = []
            this.renderState.push(this.renderer.showDensityWaves)
            this.renderState.push(this.renderer.showH2)
            this.renderState.push(this.renderer.showDust)
            this.renderState.push(this.renderer.showStars)
            this.renderState.push(this.renderer.showVelocity)
            this.renderState.push(this.renderer.showDustFilaments)

            this.renderer.showDensityWaves = true;
            this.renderer.showH2 = false;
            this.renderer.showDust = false;
            this.renderer.showStars = false;
            this.renderer.showVelocity = false;
            this.renderer.showDustFilaments = false;
        }
        finally
        {
            this._isEditMode = true
        }
    }

    public initilializeSlider(id : string, idLabel : string, prop : string) : void {
        let slider : HTMLInputElement = document.getElementById(id) as HTMLInputElement
        if (slider == null)
            throw new Error("UiController.initilializeSlider(): Ther is no input element with that id!")

        slider.value = (this as any)[prop]
        let label : HTMLElement = document.getElementById(idLabel) as HTMLElement;
        label.innerHTML = slider.value

        let obj : any = this.renderer
        slider.oninput = function() {
            obj[prop] = parseFloat(slider.value);
            label.innerHTML = slider.value;
        } 
    }

    public initilializeEditModeSlider(id : string, idLabel : string, prop : string) : void {
        let slider : HTMLInputElement = document.getElementById(id) as HTMLInputElement
        if (slider == null)
            throw new Error("UiController.initilializeSlider(): Ther is no input element with that id!")

        slider.value = (this as any)[prop]
        let label : HTMLElement = document.getElementById(idLabel) as HTMLElement;
        label.innerHTML = slider.value

        let self : UiController = this;
        slider.oninput = function() {
            (self as any)[prop] = parseFloat(slider.value)

            self.isEditMode = true;

            label.innerHTML = slider.value
            self.updateToGalaxy()
        } 

        slider.onmouseup = function() {
            self.isEditMode = false;
        }
    }
}