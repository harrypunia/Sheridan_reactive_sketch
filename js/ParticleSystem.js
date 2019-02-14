class ParticleSystem {
    constructor(points) {
        this.poseParticleSystem = new PoseParticleSystem(points);
        this.sParticleSystem = new SParticleSystem();
        
    }
    show() {
        this.poseParticleSystem.draw();
        this.sParticleSystem.show();
    }
}