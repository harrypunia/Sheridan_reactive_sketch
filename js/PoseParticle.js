class PoseParticle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.children = [];
        this.childrenAngle = 0;
    }
    show(pos, z){
        this.update();
        const mapZ = map(z, 0, width, 0, 80);
        const {x, y} = this.move(pos)
        ellipse(x, y, mapZ + mp3.vol * 100, mapZ + mp3.vol * 100);
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
    connectTo(other) {
        noFill();
        stroke(50);
        line(this.x, this.y, other.x, other.y);
    }
}