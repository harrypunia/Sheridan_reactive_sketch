class SParticle {
    constructor(x, n) {
        this.x = x;
        this.n = n;
        this.children = [];
        this.angle = 0;
        for(let i = 0; i < n; i++) {
            this.children[i] = new SParticleChildren(i, n);
        }
    }
    show() {
        for(let i = 0; i < this.children.length; i++) {
            this.children[i].update(this.x, this.angle);
            this.children[i].show();
        }
        this.angle+= 0.05;
    }
}

class SParticleChildren {
    constructor(relIndex, siblingLength) {
        this.relIndex = relIndex;
        this.siblingLength = siblingLength;
        this.x = 0;
        this.y = 0;
        this.r = 10;
    }
    show(x, angle) {
        ellipse(this.x, this.y, 5, 5);
    }
    update(x, angle) {
        noStroke();
        fill(100, 50, 150);
        const relAngle = this.relIndex / this.siblingLength * 6.28;
        this.x = this.r * Math.sin(angle + relAngle) + x;
        this.y = map(this.relIndex, 0, this.siblingLength, 0, height);
    }
}