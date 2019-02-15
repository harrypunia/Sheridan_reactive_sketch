class Sketch {
    constructor() {
        this.fetchVideo();
        ml5.poseNet(video).on('pose', (poses) => points = poses);
        this.particleSystem = new ParticleSystem(points);
        this.smoothVol = 0;
    }
    init() {
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
    navigate() {}
    fetchVideo() {
        video = createCapture(VIDEO);
        video.size(width, height);
    }
    getCnvRot() {
        let rot = {};
        const noseToLeftEar = pointGap(0, 3);
        const noseToRightEar = pointGap(0, 4);
        const maxDist = pointGap(4, 3) / 2;
        noseToLeftEar < noseToRightEar ? rot.y = map(noseToLeftEar, 0, maxDist, -.2, 0) : rot.y = map(noseToRightEar, 0, maxDist, .2, 0);
        rotateY(rot.y);
        const zAngle = posePos(3, 'y') - posePos(4, 'y');
        const earDist = pointGap(0, 4);
        rot.z = map(zAngle, -earDist, earDist, .1, -.1);
        rotateZ(rot.z);
    }
}
