class ParticleSystem {
    constructor(points) {
        this.points = points;
        this.particles = [];
        this.particles[0] = new Particle(width/2, height/2);
    }
    show() {
        this.particles[0].show();
        const force = createVector(this.getPointPos(0, 'x'), this.getPointPos(0, 'y'))
        this.particles[0].applyForce(force);
    }
    getPointPos (at, which) {
        if (points != undefined && points.length > 0) {
            return which == 'x' ? width - points[at].pose.keypoints[at].position.x : points[at].pose.keypoints[at].position.y;
        } else {
            return false
        }
    }
}
