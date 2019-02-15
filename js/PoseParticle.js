class PoseParticle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.z = 0;
    }
    show(pos, z) {
        noStroke();
        fill(255);
        this.x = lerp(this.x, pos.x, 0.05);
        this.y = lerp(this.y, pos.y, 0.05);
        this.z = map(z, 0, width, 0, 80);
        ellipse(this.x, this.y, this.z + mp3.vol * 100, this.z + mp3.vol * 100);
    }
    connectTo(other) {
        noFill();
        stroke(50);
        line(this.x, this.y, other.x, other.y);
    }
}
