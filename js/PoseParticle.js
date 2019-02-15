class PoseParticle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    show(pos, z){
        noStroke();
        fill(255);
        const mapZ = map(z, 0, width, 0, 80);
        const {x, y} = this.move(pos)
        ellipse(x, y, mapZ + mp3.vol * 100, mapZ + mp3.vol * 100);
        this.x = x;
        this.y = y;
    }
    move(pos) {
        this.x = (this.x - pos.x) * .1;
        this.y = (this.y - pos.y) * .1;
        return {x: this.x, y: this.y}
    }
    connectTo(other) {
        noFill();
        stroke(50);
        line(this.x, this.y, other.x, other.y);
    }
}