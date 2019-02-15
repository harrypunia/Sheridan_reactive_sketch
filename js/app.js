let init = false;
let video;
let pose;
let song;
let mp3;
let points;
let particleSystem;
let canvasRotationY;
let sketch;

function preload() {
    song = loadSound('assets/song.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    song.isLoaded() ? (mp3 = new MP3(song), sketch = new Sketch(song)) : 0;
}

function draw() {
    background(0);
    if (init) {
        mp3.updateVol();
        sketch.init();
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}
const initSketch = () => {
    init = true;
    song.play();
}