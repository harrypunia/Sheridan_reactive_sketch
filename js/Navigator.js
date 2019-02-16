class Navigator {
    constructor() {
        this.pos = {x: width, y: height};
        this.size = 20;
        this.mouseControl = false
        this.counter = {
            main: 0
        }
    }
    navigate() {
        if(mouseIsPressed) {
            this.pos.x = mouseX;
            this.pos.y = mouseY;
        } else {
            this.pos.x = lerp(this.pos.x, posePos(10).x, .02);
            this.pos.y = lerp(this.pos.y, posePos(10).y, .02);
        }
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
    isOn (div) {
        const {x, y, w, h} = this.getElementPos(div);
        return (this.pos.x - x > 0 && this.pos.x - x < w  && this.pos.y - y > 0 && this.pos.y - y < h);
    }
    highlight() {
        this.size = lerp(this.size, 60, 0.01);
    }
    reset () {
        this.size = lerp(this.size, 20, 0.1);
    }
    getElementPos(div) {
        const rect = div.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { x: rect.left + scrollLeft, y: rect.top + scrollTop, w: div.offsetWidth, h: div.offsetHeight }
    }
}