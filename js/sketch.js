class Sketch {
    constructor() {
        this.fetchVideo();
        this.createPose();
        this.particleSystem = new ParticleSystem(points);
    }
    init() {
        push();
        if (points != undefined && points.length > 0) {
            this.getCanvasRotation();
            rotateY(canvasRotationY);
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
    createPose() {
        pose = new Pose(video);
        //pose.fetchPoints();
    }
    getCanvasRotation() {
        const distLeft = dist(this.posePos(0, 'x'), this.posePos(0, 'y'), this.posePos(3, 'x'), this.posePos(3, 'y'));
        const distRight = dist(this.posePos(0, 'x'), this.posePos(0, 'y'), this.posePos(4, 'x'), this.posePos(4, 'y'));
        const maxDist = dist(this.posePos(4, 'x'), this.posePos(4, 'y'), this.posePos(3, 'x'), this.posePos(3, 'y')) / 2;
        distLeft < distRight ? canvasRotationY = map(distLeft, 0, maxDist, -.2, 0) : canvasRotationY = map(distRight, 0, maxDist, .2, 0);
    }
    posePos(at, which) {
            return which == 'x' ? width - points[0].pose.keypoints[at].position.x : points[0].pose.keypoints[at].position.y;
    }
}
