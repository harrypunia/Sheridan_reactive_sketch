let init = false;
let songs = [];
let sketch;
let ml5Loaded = false;
let songsLoaded;

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
    if (ml5Loaded) {
        init ? sketch.init() : sketch.navigate();
    } else {
        displayLoading();
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

const initSketch = () => {
    init = true;
    songs[0].play();
    mp3 = new MP3(songs[0]);
    intro.style.display = 'none';
}

const displayLoading = () => {
    if (songsLoaded != true) {
        let manyLoaded = songs.filter(each => each.isLoaded()).length;
        loading.style.width = manyLoaded / songs.length * 75 + 'vw';
        manyLoaded >= songs.length ? (songsLoaded = true, console.log('songs have been loaded')) : 0;
    }
}
