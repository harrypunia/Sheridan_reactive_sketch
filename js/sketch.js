let points;
let mp3;
let capture;
let blink = 0;
let handX = 0;
let handY = 0;

class Sketch {
    constructor() {
        capture = createCapture(VIDEO);
        capture.size(capture.width * 4, capture.height * 4);
        ml5.poseNet(capture, poseLoaded).on('pose', (poses) => points = poses);
        this.particleSystem = new ParticleSystem(points);
        this.rot = {
            y: 0,
            z: 0
        }
        this.navigator = new Navigator();
    }
    init() {
        this.displayPerformance();
        mp3.updateVol();
        push();
        if (points != undefined && points.length > 0) {
            this.getCnvRot();
            translate(-width / 4 - (mp3.smoothVol * width / 20), -height / 4 - (mp3.smoothVol * height / 20), 1);
            scale(.5 + mp3.smoothVol / 10, .5 + mp3.smoothVol / 10, 1);
            noFill();
            stroke(180, 50, 200);
            rect(0, 0, width, height);
        }
        this.particleSystem.show();
        push();
    }
    menu() {
        noFill();
        stroke(255);
        push();
        translate(-width / 2, -height / 2);
        if (points != undefined && points.length > 0) {
            this.navigator.navigate();
            this.navigationVisuals();
        }
        pop();
    }
    navigationVisuals() {
        if (this.navigator.isOn(intro)) {
            introText.innerHTML = 'Hold to play song';
            introText.style.transform = 'scale(1.0' + this.navigator.counter.main + ')'
            this.navigator.highlight();
            this.navigator.counter.main++;
            this.navigator.counter.main >= 60 ? initSketch() : 0;
        } else {
            introText.style.transform = 'scale(1.0)';
            introText.innerHTML = 'Raise your hand';
            this.navigator.counter.main = 0;
            this.navigator.reset();
        }
    }
    displayPerformance() {
        if(frameRate() < 30) {
            performance.style.background = 'red';
        } else {
            performance.style.background = 'black';
        }
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
        this.rot.z = lerp(this.rot.z, map(zAngle, -earDist, earDist, .2, -.2), 0.05);
    }
}
