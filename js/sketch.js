let init = false;
let video;
let pose;
let song;
let mp3;
let points;
let particleSystem;

function preload() {
    song = loadSound('assets/song.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    loadAssets();
}

function draw() {
    background(0);
    mp3.updateVol();
    if (init) {
        particleSystem.show();
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

const loadAssets = () => song.isLoaded() ? (document.getElementById('play').classList.add('in'), mp3 = new MP3(song)) : 0;
const initSketch = () => {
    init = true;
    song.play();
    document.getElementById('play').style.display = 'none';
    declareObjects();
}
const declareObjects = () => {
    video = createCapture(VIDEO);
    video.size(width, height);
    pose = new Pose(video);
    pose.fetchPoints();
    particleSystem = new ParticleSystem(points);
}
