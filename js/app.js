let init = false;
let songs = [];
let sketch;
let ml5Loaded = false;
const intro = document.getElementsByClassName('intro')[0];

function preload() {
    for (let i = 0; i < 3; i++) {
        songs[i] = loadSound('assets/' + i + '.mp3');
    }
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    songs.every((song) => song.isLoaded()) ? (sketch = new Sketch(), console.log('loading successful')) : console.log('unable to load songs');
}

function draw() {
    background(0);
    if (init) {
        mp3.updateVol();
        sketch.init();
    } else {
        sketch.navigate();
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

const initSketch = () => {
    init = true;
    songs[0].play();
}