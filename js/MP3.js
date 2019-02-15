class MP3 {
    constructor(song) {
        this.song = song;
        this.amp = new p5.Amplitude();
        this.vol;
        this.smoothVol = 0;
    }
    updateVol() {
        this.vol = this.amp.getLevel();
        this.smoothVol = lerp(this.smoothVol, this.vol, 0.1);
    }
}