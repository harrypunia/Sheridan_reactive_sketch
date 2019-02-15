class Sketch {
    constructor() {
        this.fetchVideo();
        ml5.poseNet(video).on('pose', (poses) => points = poses);
        this.particleSystem = new ParticleSystem(points);
    }
    init() {
        push();
        if (points != undefined && points.length > 0) {
            this.getCnvRot();
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
        const distLeft = dist(this.posePos(0, 'x'), this.posePos(0, 'y'), this.posePos(3, 'x'), this.posePos(3, 'y'));
        const distRight = dist(this.posePos(0, 'x'), this.posePos(0, 'y'), this.posePos(4, 'x'), this.posePos(4, 'y'));
        const maxDist = dist(this.posePos(4, 'x'), this.posePos(4, 'y'), this.posePos(3, 'x'), this.posePos(3, 'y')) / 2;
        distLeft < distRight ? rot.y = map(distLeft, 0, maxDist, -.2, 0) : rot.y = map(distRight, 0, maxDist, .2, 0);
        rotateY(this.cnvRotation.y);
        rotateX(this.cnvRotation.x);
        rotateZ(this.cnvRotation.Z);
    }
    posePos(at, which) {
        return which == 'x' ? width - points[0].pose.keypoints[at].position.x : points[0].pose.keypoints[at].position.y;
    }
}
