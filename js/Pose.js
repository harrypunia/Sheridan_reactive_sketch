class Pose {
    constructor(video) {
        this.points;
        this.pose = ml5.poseNet(video);
    }
    fetchPoints() {
        this.pose.on('pose', this.getPoses);
    }
    getPoses(poses) {
        points = poses;
    }
}
