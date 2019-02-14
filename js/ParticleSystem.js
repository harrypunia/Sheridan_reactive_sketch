class ParticleSystem {
    constructor(points) {
        this.poseParticleSystem = new PoseParticleSystem(points);
        this.sParticleSystem = new SParticleSystem(points);
        
    }
    show() {
        this.poseParticleSystem.draw();
        this.sParticleSystem.show();
    }
}