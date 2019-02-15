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
            translate(-width / 4 - (mp3.vol * width / 20), -height / 4 - (mp3.vol * height / 20));
            scale(.5 + mp3.vol / 10);
            noFill();
            stroke(255);
            rect(5, 5, width - 10, height - 10);
        }
        this.particleSystem.show();
        push();
    }
    fetchVideo() {
        video = createCapture(VIDEO);
        video.size(width, height);
    }
    getCnvRot() {
        let rot = {};
        const noseToLeftEar = this.pointGap(0, 3);
        const noseToRightEar = this.pointGap(0, 4);
        const maxDist = this.pointGap(4, 3) / 2;
        noseToLeftEar < noseToRightEar ? rot.y = map(noseToLeftEar, 0, maxDist, -.2, 0) : rot.y = map(noseToRightEar, 0, maxDist, .2, 0);
        rotateY(rot.y);
        const zAngle = this.posePos(3, 'y') - this.posePos(4, 'y');
        const earDist = this.pointGap(0, 4);
        rot.z = map(zAngle, -earDist, earDist, .1, -.1);
        rotateZ(rot.z);
        //rotateX(rot.x);
    }
    pointGap(n1, n2) {
        return dist(this.posePos(n1, 'x'), this.posePos(n1, 'y'), this.posePos(n2, 'x'), this.posePos(n2, 'y'));
    }
    posePos(at, which) {
        return which == 'x' ? width - points[0].pose.keypoints[at].position.x : points[0].pose.keypoints[at].position.y;
    }
}
