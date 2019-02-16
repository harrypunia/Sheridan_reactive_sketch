class NetworkSystem {
    constructor() {
        this.points = [];
        this.link = false;
        for (let i = 0; i < 100; i++) {
            this.points[i] = new Point(random(10), random(10));
        }
    }
    draw() {
        noFill();
        stroke(255);
        mp3.vol > 0.45 ? this.link = true : this.link = false;
        translate(width/2, height/2, 1);
        for (let i in this.points) {
            this.points[i].draw();
            for (let j in this.points) {
                this.points[i].connectTo(this.points[j], this.link);
            }
        }
        translate(-width/2, -height/2, 1);
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
    }
    draw() {
        this.x = map(noise(this.xOff), 0, 1, -width * 2, width * 2);
        this.y = map(noise(this.yOff), 0, 1, -height * 2, height * 2);
        noStroke();
        fill(255);
        ellipse(this.x, this.y, 10 + mp3.smoothVol, 10 + mp3.smoothVol);
        this.xOff += mp3.smoothVol / 500;
        this.yOff += mp3.smoothVol / 500;
    }
    connectTo(other, blink) {
        if (Math.abs(dist(this.x, this.y, other.x, other.y)) < 200) {
            noFill();
            if (blink) {
                this.op = lerp(this.op, 50, 0.5);
            } else {
                this.op = lerp(this.op, 2, 0.01);
            }
            stroke(255, this.op);
            line(this.x, this.y, other.x, other.y);
        }
    }
}
