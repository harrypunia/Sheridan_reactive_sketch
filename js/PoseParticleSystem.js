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
                const pos = {x: posePos(i).x, y: posePos(i).y}
                const z = pointGap(1, 2);
                this.poseParticles[i].show(pos, z);
            }
            this.drawLipParticle({x1: posePos(1).x, y1: posePos(1).y, x2: posePos(2).x, y2:posePos(2).y});
        }
    }
    drawLipParticle(ears) {
        const{x1, y1, x2, y2} = ears;
        const gap = dist(x1, y1, x2, y2);
        const pos = {x: (x1 + x2) / 2 + (y1 - y2), y: (y1 + y2) / 2 + gap};
        this.poseParticles[5].show(pos, gap);
        for (let j = 0; j < this.poseParticles.length - 1; j++) {
            this.poseParticles[5].connectTo(this.poseParticles[j]);
        }
    }
}