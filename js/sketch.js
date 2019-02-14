let init = false;
let amp = 0.0;
let vol = 0.0;
let particles = [];
let video;
let song = null;

function preload() {
    song = loadSound('assets/song.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    if (song.isLoaded()) {
        let btn = document.getElementById('play');
        btn.classList.add('in');
    }
    amp = new p5.Amplitude();
    video = new Video();
    video.fetchPose();
}

function draw() {
    vol = amp.getLevel();
    if (init) {
        image(video, 0, 0);
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

const initSketch = () => {
    init = true;
    //song.play();
    let btn = document.getElementById('play');
    btn.style.display = 'none';
}
