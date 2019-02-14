class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
    }
    show(){
        this.updatePhysics();
        ellipse(this.pos.x, this.pos.y, 20, 20);
    }
    updatePhysics() {
        this.updateColor();
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    applyForce(force) {
        this.acc.add(force);
    }
    updateColor () {
        noStroke();
        fill(255);
    }
}