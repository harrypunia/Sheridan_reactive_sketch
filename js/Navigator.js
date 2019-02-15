class Navigator {
    constructor() {
        this.pos = {x: width, y: height};
        this.size = 20
    }
    navigate() {
        this.pos.x = lerp(this.pos.x, posePos(10).x, .02);
        this.pos.y = lerp(this.pos.y, posePos(10).y, .02);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
    isOn (div) {
        
    } 
    highlight() {
        this.size = lerp(this.size, 60, 0.01);
    }
    reset () {
        this.size = lerp(this.size, 20, 0.1);
    }
}