/* Individual particle associated with the pose.
   Intakes ml5 points as parameters to display the point
   has connectTo() Method to connect points to each other.
*/

class PoseParticle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.z = 0;
    }
    show(pos, z) {
        noStrokeFill(100, 10, 80);
        this.x = lerp(this.x, pos.x, 0.08);
        this.y = lerp(this.y, pos.y, 0.08);
        this.z = map(z, 0, width, 2, 5);
        ellipse(this.x, this.y, this.z + mp3.smoothVol * 100, this.z + mp3.smoothVol * 100);
    }
    connectTo(other) {
        noFillStroke(100, 10, 80);
        line(this.x, this.y, other.x, other.y);
    }
}
