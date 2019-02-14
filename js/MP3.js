class MP3 {
    constructor(song) {
        this.song = song;
        this.amp = new p5.Amplitude();
        this.vol;
    }
    updateVol() {
        this.vol = this.amp.getLevel();
    }
}