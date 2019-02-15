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
        this.rot = {y: 0,z: 0}
        this.navigator = {size: 20,counter: 0}
    }
    init() {
        mp3.updateVol();
        push();
        if (points != undefined && points.length > 0) {
            this.getCnvRot();
            translate(-width / 4 - (mp3.smoothVol * width / 20), -height / 4 - (mp3.smoothVol * height / 20));
            scale(.5 + mp3.smoothVol / 10);
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
        translate(-width / 4, -height / 4);
        scale(.5);
        if (points != undefined && points.length > 0) {
            handX = lerp(handX, posePos(10).x, .02);
            handY = lerp(handY, posePos(10).y, .02);
            ellipse(handX, handY, this.navigator.size, this.navigator.size);
            let op;
            const inRange = (Math.abs(handY - height / 2) < 100 && Math.abs(handX - width / 2)) < 150;
            if (!inRange) {
                op = 1;
                introText.innerHTML = 'Hold to play'
                this.navigator.counter++;
                this.navigator.size = lerp(this.navigator.size, 60, .01);
                this.navigator.counter >= 100 ? initSketch() : 0;
            } else {
                this.navigator.size = lerp(this.navigator.size, 20, .2);
                introText.innerHTML = 'Raise your hand'
                op = map(noise(blink), 0, 1, .5, 1);
                this.navigator.counter = 0;
            }
            introText.style.opacity = op;
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
        pointGap(0, 3) < pointGap(0, 4) ? (chosenSide = pointGap(0, 3), invert = -1) : chosenSide = pointGap(0, 4);
        this.rot.y = lerp(this.rot.y, map(chosenSide, 0, maxDist, invert * .2, 0), 0.05);
    }
    getRotZ() {
        const zAngle = posePos(3).y - posePos(4).y;
        const earDist = pointGap(0, 4);
        this.rot.z = lerp(this.rot.z, map(zAngle, -earDist, earDist, .1, -.1), 0.05);
    }
}
