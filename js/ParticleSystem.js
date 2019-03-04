class ParticleSystem {
    constructor(points) {
        this.networkSystem = new NetworkSystem();
        this.poseParticleSystem = new PoseParticleSystem(points);
    }
    show() {
        this.networkSystem.draw();
        this.poseParticleSystem.draw();
    }
}
