/* This is the complex grid structure in the back, that responds to music
   NetworkSystem uses Point class to draw points and connect them to each other.
*/

class NetworkSystem {
    constructor() {
        this.points = [];
        for (let i = 0; i < 120; i++) {this.points[i] = new Point(random(1000), random(1000));}
    }
    draw() {
        noFillStroke(255);
        translate(width / 2, height / 2, 1); //Note: [Not using push, pop; because this is inside one].
        for (let i in this.points) { //nested for loops for connections
            for (let j in this.points) {
                this.points[i].connectTo(this.points[j]);
            }
            this.points[i].draw();
        }
        translate(-width / 2, -height / 2, 1);
    }
}

class Point {
    constructor(xOff, yOff) {
        this.x;
        this.y;
        this.xOff = xOff;
        this.yOff = yOff;
        this.range = { min: 50, max: 75 }
        this.op = 2
        this.col = { r: 0, b: 0 }
    }
    draw() {
        this.getPos(); //gets positions and colors for each point
        noStrokeFill(this.col.r, 20, this.col.b); //love this xD
        ellipse(this.x, this.y, 10 + mp3.smoothVol, 10 + mp3.smoothVol);
        this.xOff += mp3.smoothVol / 300;
        this.yOff += mp3.smoothVol / 300;
    }
    getPos() {
        this.x = map(noise(this.xOff), 0, 1, -width * 2, width * 2);
        this.y = map(noise(this.yOff), 0, 1, -height * 2, height * 2);
        const relPos = dist(this.x, this.y, 0, 0);
        this.col.r = map(relPos, -width * 2, width * 2, 100, 0);
        this.col.g = map(relPos, -width * 2, width * 2, 100, 0);
        this.col.b = map(relPos, -width * 2, width * 2, 0, 100);
    }
    connectTo(other, blink) { //connects to points
        const gap = Math.abs(dist(this.x, this.y, other.x, other.y)); //get gap
        if (gap < 200 && gap > 100) { //conditions to connect
            noFillStroke(this.col.r, 10, this.col.b);
            line(this.x, this.y, other.x, other.y);
        }
    }
}
