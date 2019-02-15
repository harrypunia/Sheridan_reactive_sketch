let points;
let mp3;
let capture;
let particleSystem;
let blink;
let handX = 0;
let handY = 0;

class Sketch {
    constructor() {
        this.fetchVideo();
        ml5.poseNet(capture, poseLoaded).on('pose', (poses) => points = poses);
        this.particleSystem = new ParticleSystem(points);
        this.smoothVol = 0;
        blink = random(10);
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
            (Math.abs(handY - height / 2) < 50) && (Math.abs(handX - width / 2) < 150) ? op = 1: op = noise(blink);
            intro.getElementsByTagName('p')[0].style.opacity = op;
            blink += 0.01;
        }
        pop();
    }
    fetchVideo() {
        capture = createCapture(VIDEO);
        capture.size(width, height);
    }
    getCnvRot() {
        let rot = {};
        const noseToLeftEar = pointGap(0, 3);
        const noseToRightEar = pointGap(0, 4);
        const maxDist = pointGap(4, 3) / 2;
        noseToLeftEar < noseToRightEar ? rot.y = map(noseToLeftEar, 0, maxDist, -.2, 0) : rot.y = map(noseToRightEar, 0, maxDist, .2, 0);
        rotateY(rot.y);
        const zAngle = posePos(3).y - posePos(4).y;
        const earDist = pointGap(0, 4);
        rot.z = map(zAngle, -earDist, earDist, .1, -.1);
        rotateZ(rot.z);
    }
}
