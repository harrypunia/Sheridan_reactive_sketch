let init = false;
let video;
let pose;
let songs = [];
let mp3;
let points;
let particleSystem;
let canvasRotationY;
let sketch;
const intro = document.getElementsByClassName('intro')[0];

function preload() {
    for (let i = 0; i < 3; i++) {
        songs[i] = loadSound('assets/' + i + '.mp3');
    }
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    if(songs.every((song) => song.isLoaded())) {
        sketch = new Sketch(songs[2]);
        console.log('loading successful');
    } else  {
        console.log('song failed to load')
    }
}

function draw() {
    background(0);
    sketch.navigate();
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

const checkSelection = () => {
    mp3 = new MP3(songs[2]);
}
