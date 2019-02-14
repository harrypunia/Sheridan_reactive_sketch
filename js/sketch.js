let init = false;
let video;
let pose;
let song;
let mp3;
let points;

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
        ellipse(posePos(0, 'x'), posePos(0, 'y'), 20, 20)
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
    video = createCapture(VIDEO);
    video.size(width, height);
    pose = new Pose(video);
    pose.fetchPoints();
}

const posePos = (at, which) => {
    if (points != undefined && points.length > 0) {
        return which == 'x' ? width - points[at].pose.keypoints[at].position.x : points[at].pose.keypoints[at].position.y;
    } else {
        return false
    }
}
