class ParticleSystem {
    constructor(points) {
        this.poseParticleSystem = new PoseParticleSystem(points);
        
    }
    show() {
        this.poseParticleSystem.draw();
    }
}