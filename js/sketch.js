let points;
let mp3;
let capture;
let particleSystem;
let blink = 0;
let handX = 0;
let handY = 0;

class Sketch {
    constructor() {
        capture = createCapture(VIDEO);
        ml5.poseNet(capture, poseLoaded).on('pose', (poses) => points = poses);
        this.particleSystem = new ParticleSystem(points);
        this.smoothVol = 0;
        this.rot = {x: 0, y: 0};
    }
    init() {
        mp3.updateVol();
        push();
        if (points != undefined && points.length > 0) {
            this.getCnvRot();
            this.smoothVol = lerp(this.smoothVol, mp3.vol, .2);
            translate(-width / 4 - (this.smoothVol * width / 20), -height / 4 - (this.smoothVol * height / 20));
            scale(.5 + this.smoothVol / 10);
            noFill();
            stroke(255);
            rect(5, 5, width - 10, height - 10);
        }
        this.particleSystem.show();
        push();
    }
    navigate() {
        noFill();
        stroke(255);
        push();
        translate(-width / 2, -height / 2);
        if (points != undefined && points.length > 0) {
            handX = lerp(handX, posePos(10).x, .1);
            handY = lerp(handY, posePos(10).y, .1);
            ellipse(handX, handY, 20, 20);
            let op;
            const inRange = (Math.abs(handY - height / 2) < 50 && Math.abs(handX - width / 2)) < 150;
            inRange ? op = 1 : op = map(noise(blink), 0, 1, .5, 1);
            intro.getElementsByTagName('p')[0].style.opacity = op;
            blink += 0.01;
        }
        pop();
    }
    getCnvRot() {
        this.getRotY();
        this.getRotZ();
        rotateY(this.rot.y);
        rotateZ(this.rot.z);
    }
    getRotY() {
        const maxDist = pointGap(4, 3) / 2;
        let invert = 1;
        let chosenSide = 0.0;
        pointGap(0, 3) < pointGap(0, 4) ? chosenSide = pointGap(0, 3) : (chosenSide = pointGap(0, 4), invert = -1);
        this.rot.y = lerp(this.rot.y, map(chosenSide, 0, maxDist, invert * .2, 0), 0.05);
    }
    getRotZ() {
        const zAngle = posePos(3).y - posePos(4).y;
        const earDist = pointGap(0, 4);
        this.rot.z = lerp(this.rot.z, map(zAngle, -earDist, earDist, .1, -.1), 0.05);
    }
}
