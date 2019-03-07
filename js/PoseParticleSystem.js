/* This is the particle system for poseParticle
   Draws the particle at each point of the pose
   Math for lips is done manually as ml5 doesnt provide a lip point
   connections to the corner of the box are done manually as well
*/

class PoseParticleSystem {
    constructor() {
        this.poseParticles = [];
        for (let i = 0; i < 6; i++) { this.poseParticles[i] = new PoseParticle(width / 2, height / 2) }
    }
    draw() {
        if (points != undefined && points.length > 0) { 
            //fallback for when face is not detected to avoid crashing
            this.connectCorners(); //manually connecting corners
            for (let i = 0; i < this.poseParticles.length - 1; i++) {
                //Nesting to connect particles to each other
                for (let j = 0; j < this.poseParticles.length - 1; j++) {
                    this.poseParticles[i].connectTo(this.poseParticles[j]);
                }
                const pos = {x: posePos(i).x, y: posePos(i).y} //global posePos func
                const z = pointGap(1, 2);
                this.poseParticles[i].show(pos, z); //manually drawing lip particle
            }
            const ears = {x1: posePos(1).x, y1: posePos(1).y, x2: posePos(2).x, y2:posePos(2).y}
            this.drawLip(ears);
        }
    }
    drawLip(ears) {
        const{x1, y1, x2, y2} = ears;
        const gap = dist(x1, y1, x2, y2);
        const pos = {x: (x1 + x2) / 2 + (y1 - y2), y: (y1 + y2) / 2 + gap};
        this.poseParticles[5].show(pos, gap);
        for (let i = 0; i < this.poseParticles.length - 1; i++) {
            this.poseParticles[5].connectTo(this.poseParticles[i]);
        }
    }
    connectCorners() {
        noFillStroke(100, 10, 80);
        this.drawLine(0, 0, 1);
        this.drawLine(width, 0, 1);
        this.drawLine(0, 0, 2);
        this.drawLine(width, 0, 2);
        this.drawLine(0, 0, 3);
        this.drawLine(0, height, 3);
        this.drawLine(width, 0, 4);
        this.drawLine(width, height, 4);
        this.drawLine(0, height, 5);
        this.drawLine(width, height, 5);
    }
    drawLine(x, y, i) {
        line(x, y, this.poseParticles[i].x, this.poseParticles[i].y);
    }
}