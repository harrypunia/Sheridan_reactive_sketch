let init = false;
let video;
let pose;
let song;
let mp3;

function preload() {
    song = loadSound('assets/song.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    loadAssets();
    video = createCapture(VIDEO);
    pose = new Pose(video);
    pose.fetchPoints();
}

function draw() {
    mp3.updateVol();
    if (init) {
        image(video, 0, 0);
        console.log(pose.points);
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
}