class Video {
    constructor() {
        this.points;
        this.video = createCapture(VIDEO);
        this.pose = ml5.poseNet(this.video);
    }
    fetchPose() {
        this.video.hide();
        this.pose.on('pose', this.gotPoses);
    }
    gotPoses(poses) {
        this.points = poses;
    }
}
