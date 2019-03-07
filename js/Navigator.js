/*Navigator class is the control for navigation
  the method navigate() displays the ellipse and allows for mouse navigation
  isOn() method returns true/false to whether the navigator is on a the div passed as a parameter
  highlight() and reset() method changes visuals of the ellipse to specify clickable items
*/

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
        //Allows mouse navigation
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
        const {x, y, w, h} = this.getElementPos(div); //Object deconstruction
        return (this.pos.x - x > 0 && this.pos.x - x < w  && this.pos.y - y > 0 && this.pos.y - y < h);//returns true or false if ellipse is on div
    }
    highlight() {
        this.size = lerp(this.size, 60, 0.01);//changes color of ellipse
    }
    reset () {
        this.size = lerp(this.size, 20, 0.1);//changes color of ellipse
    }
    getElementPos(div) {
        const rect = div.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { x: rect.left + scrollLeft, y: rect.top + scrollTop, w: div.offsetWidth, h: div.offsetHeight } //returns x, y, w, h
    }
}