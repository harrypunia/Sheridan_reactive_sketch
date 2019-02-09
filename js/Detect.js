class Detect {
    constructor(video) {
        this.points;
        this.pose = ml5.poseNet(video);
    }
    fetchPose () {
        this.pose.on('pose', this.gotPoses);
    }
    gotPoses (poses) {
        this.points = poses;
    }
}