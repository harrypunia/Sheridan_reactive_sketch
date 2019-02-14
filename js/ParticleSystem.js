class ParticleSystem {
    constructor(points) {
        this.points = points;
        this.poseParticles = [];
        for (let i = 0; i < 6; i++) {
            this.poseParticles[i] = new PoseParticle(width / 2, height / 2);
        }
    }
    show() {
        if (points != undefined && points.length > 0) {
            for (let i = 0; i < this.poseParticles.length - 1; i++) {
                for (let j = 0; j < this.poseParticles.length - 1; j++) {
                    this.poseParticles[i].connectTo(this.poseParticles[j]);
                }
                const pos = createVector(this.getPointPos(i, 'x'), this.getPointPos(i, 'y'))
                const z = dist(this.getPointPos(1, 'x'), this.getPointPos(1, 'y'), this.getPointPos(2, 'x'), this.getPointPos(2, 'y'));
                this.poseParticles[i].show(pos, z);
            }
            this.drawLipParticle(this.getPointPos(1, 'x'), this.getPointPos(1, 'y'), this.getPointPos(2, 'x'), this.getPointPos(2, 'y'));
        }
    }
    drawLipParticle(x1, y1, x2, y2) {
        const pos = createVector((x1 - x2) + x1, y1 + (y1 - y2) + gap);
        const gap = dist(x1, y1, x2, y2);
        this.poseParticles[5].show(pos, gap);
    }
    getPointPos(at, which) {
        return which == 'x' ? width - points[0].pose.keypoints[at].position.x : points[0].pose.keypoints[at].position.y;
    }
}
