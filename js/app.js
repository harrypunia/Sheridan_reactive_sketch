let init = false;
let songList = [];
let sketch;
let ml5Loaded = false;
let songsLoaded;
let activeSong = 0;
let dropFiles;

function preload() {
    for (let i = 0; i < 3; i++) {
        songList[i] = loadSound('assets/' + i + '.mp3');
    }
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    songList.every((song) => song.isLoaded()) ? (sketch = new Sketch(), console.log('loading successful')) : console.log('unable to load songs');
    lookForUpload();
}

function draw() {
    background(0);
    if (ml5Loaded) {
        logo.style.display = 'none';
        init ? sketch.init() : sketch.menu();
    } else {
        clear();
        displayLoading();
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

const initSketch = () => {
    init = true;
    songList[activeSong].play();
    mp3 = new MP3(songList[activeSong]);
    intro.style.display = 'none';
    songMenu.removeAttribute('in');
}

const displayLoading = () => {
    if (songsLoaded != true) {
        let manyLoaded = songList.filter(each => each.isLoaded()).length;
        loading.style.width = manyLoaded / songs.length * 75 + 'vw';
        manyLoaded >= songList.length ? (songsLoaded = true, console.log('songs have been loaded')) : 0;
    }
}
