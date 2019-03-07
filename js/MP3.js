/*MP3 obeject is a global object available throughout the sketch
  provides 2 values: vol and smoothVol
  smoothVol is a lerped version of vol, which provides a smoother transition*/

class MP3 {
    constructor(song) {
        //takes a song as a parameter to analyze it
        this.song = song;
        this.amp = new p5.Amplitude();
        this.vol;
        this.smoothVol = 0;
    }
    updateVol() {
        //needs to be upadeted every frame to return values (should be places in draw)
        this.vol = this.amp.getLevel();
        this.smoothVol = lerp(this.smoothVol, this.vol, 0.1); //lerp to smoothen the values
    }
}