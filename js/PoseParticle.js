class PoseParticle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.children = [];
        this.childrenAngle = 0;
//        for(let i = 0; i < 10; i++) {
//            this.children[i] = new PoseParticleChildren(i, 10);
//        }
    }
    show(pos, z){
        this.update();
        const mapZ = map(z, 0, width, 0, 80);
        const {x, y} = this.move(pos)
        ellipse(x, y, mapZ + mp3.vol * 100, mapZ + mp3.vol * 100);
        this.drawChilden(x, y);
    }
    update() {
        this.childrenAngle += 0.08;
        noStroke();
        fill(255);
    }
    move(pos) {
        const newX = lerp(pos.x, this.x, .5);
        const newY = lerp(pos.y, this.y, .5);
        this.x = newX;
        this.y = newY;
        return {x: newX,y: newY}
    }
//    drawChilden(x, y) {
//        for(let i = 0; i < this.children.length; i++) {
//            this.children[i].updatePos(x, y, this.childrenAngle);
//            this.children[i].show();
//        }
//    }
    connectTo(other) {
        noFill();
        stroke(50);
        line(this.x, this.y, other.x, other.y);
    }
}
class PoseParticleChildren {
    constructor(relIndex, siblingLength) {
        this.relIndex = relIndex;
        this.siblingLength = siblingLength;
        this.x = 0;
        this.y = 0;
        this.rOff = random(100);
        this.r;
    }
    show() {
        ellipse(this.x, this.y, 2, 2);
    }
    updatePos(x, y, childrenAngle) {
        this.r = map(noise(this.rOff), 0, 1, 10, 20)
        const relAngle = this.relIndex / this.siblingLength * 6.28;
        this.x = this.r * Math.sin(childrenAngle + relAngle) + x;
        this.y = this.r * Math.cos(childrenAngle + relAngle) + y;
        this.rOff += 0.01;
    }
}