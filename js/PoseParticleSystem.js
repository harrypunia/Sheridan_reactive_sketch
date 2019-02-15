class PoseParticleSystem {
    constructor() {
        this.poseParticles = [];
        for (let i = 0; i < 6; i++) {
            this.poseParticles[i] = new PoseParticle(width / 2, height / 2);
        }
    }
    draw() {
        if (points != undefined && points.length > 0) {
            for (let i = 0; i < this.poseParticles.length - 1; i++) {
                for (let j = 0; j < this.poseParticles.length - 1; j++) {
                    this.poseParticles[i].connectTo(this.poseParticles[j]);
                }
                const pos = createVector(posePos(i).x, posePos(i).y)
                const z = dist(posePos(1).x, posePos(1).y, posePos(2).x, posePos(2).y);
                this.poseParticles[i].show(pos, z);
            }
            this.drawLipParticle(posePos(1).x, posePos(1).y, posePos(2).x, posePos(2).y);
        }
    }
    drawLipParticle(x1, y1, x2, y2) {
        const gap = dist(x1, y1, x2, y2);
        const pos = createVector((x1 + x2) / 2 + (y1 - y2), (y1 + y2) / 2 + gap);
        this.poseParticles[5].show(pos, gap);
        for (let j = 0; j < this.poseParticles.length - 1; j++) {
            this.poseParticles[5].connectTo(this.poseParticles[j]);
        }
    }
}