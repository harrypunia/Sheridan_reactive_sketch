/*Using Classes to keep the app simple and modulated*/

let init = false;
let songList = [];
let sketch;
let ml5Loaded = false;
let songsLoaded;
let activeSong = 0;
let dropFiles;

function preload() {
    for (let i = 0; i < 3; i++) {songList[i] = loadSound('assets/' + i + '.mp3')} //load all songs
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL); //leverage WEBGL for 3d rotation
    songList.every((song) => song.isLoaded()) ? (sketch = new Sketch(), console.log('loading successful')) : console.log('unable to load songs');
    lookForUpload();//looking for drop files in uploadFile.js
}

function draw() {
    background(0);
    if (ml5Loaded) { //ML5 load callback
        init ? sketch.init() : sketch.menu();
    } else {
        clear();
        displayLoading();
    }
}

function windowResized() { resizeCanvas(window.innerWidth, window.innerHeight) }

const initSketch = () => { //Init sketch but setting init bool to true and loading the selected song
    init = true;
    songList[activeSong].play();
    mp3 = new MP3(songList[activeSong]); //Created mp3 objected with the selected song
    intro.style.display = 'none';
    songMenu.removeAttribute('in');
}
