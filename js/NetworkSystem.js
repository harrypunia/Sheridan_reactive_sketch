class NetworkSystem {
    constructor() {
        this.points = [];
        for (let i = 0; i < 80; i++) {
            this.points[i] = new Point(random(10), random(10));
        }
    }
    draw() {
        noFill();
        stroke(255);
        translate(width / 2, height / 2, 1);
        for (let i in this.points) {
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
        this.range = {
            min: 50,
            max: 75
        }
        this.op = 2
        this.col = {
            r: 0,
            b: 0
        }
    }
    draw() {
        this.x = map(noise(this.xOff), 0, 1, -width * 2, width * 2);
        this.y = map(noise(this.yOff), 0, 1, -height * 2, height * 2);
        const relPos = dist(this.x, this.y, 0, 0);
        this.col.r = map(relPos, -width * 2, width * 2, 100, 0);
        this.col.b = map(relPos, -width * 2, width * 2, 0, 100);
        noStroke();
        fill(this.col.r, 50, this.col.b);
        ellipse(this.x, this.y, 20 + mp3.smoothVol, 20 + mp3.smoothVol);
        this.xOff += mp3.smoothVol / 250;
        this.yOff += mp3.smoothVol / 250;
    }
    connectTo(other) {
        if (Math.abs(dist(this.x, this.y, other.x, other.y)) < 250) {
            noFill();
            stroke(this.col.r, 10, this.col.b);
            line(this.x, this.y, other.x, other.y);
        }
    }
}
