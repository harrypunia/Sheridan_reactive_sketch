class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.children = [];
        this.childrenAngle = 0;
        for(let i = 0; i < 5; i++) {
            this.children = new ParticleChildren(i, 5);
        }
    }
    show(pos){
        this.update();
        const {x,y} = this.move(pos)
        ellipse(x, y, 20, 20);
        this.drawChilden(x, y);
    }
    update() {
        this.childrenAngle += 0.01;
        noStroke();
        fill(255);
    }
    move(pos) {
        const newX = lerp(pos.x, this.x, .5);
        const newY = lerp(pos.y, this.y, .5);
        return {x: newX,y: newY}
    }
    drawChilden(x, y) {
        for(let i = 0; i < this.children.length; i++) {
            this.children[i].updatePos(x, y, this.childrenAngle);
            this.children[i].show();
        }
    }
}

class ParticleChildren {
    constructor(relIndex, siblingLength) {
        this.relIndex = relIndex;
        this.siblingLength = siblingLength;
        this.x = 0;
        this.y = 0;
        this.r = 40;
    }
    show() {
        this.updatePos();
        ellipse(this.x, this.y, 5, 5);
    }
    updatePos(x, y, childrenAngle) {
        const relAngle = this.relIndex / this.siblingLength * 3.14;
        this.x = this.r * Math.sin(childrenAngle + relAngle) + x;
        this.y = this.r * Math.sin(childrenAngle + relAngle) + y;
    }
}