class SParticleSystem {
    constructor() {
        this.sParticles = [];
        for (let i = 0; i < 5; i++) {
            const xOffset = map(i, 0, 4, width / 2 - 50, width / 2 + 50);
            this.sParticles[i] = new SParticle(xOffset, 20);
        }
    }
    show() {
        for (let i = 0; i < this.sParticles.length; i++) {
            this.sParticles[i].show();
        }
    }
}
