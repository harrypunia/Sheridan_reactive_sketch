class ParticleSystem {
    constructor(points) {
        this.poseParticleSystem = new PoseParticleSystem(points);
        this.networkSystem = new NetworkSystem();
    }
    show() {
        this.poseParticleSystem.draw();
        this.networkSystem.draw(posePos(1))
    }
}