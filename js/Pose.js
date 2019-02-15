class Pose {
    constructor(video) {
        this.points;
        this.pose = ml5.poseNet(video);
        this.pose.on('pose', (poses) => points = poses);
    }
}
