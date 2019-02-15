let init = false;
let video;
let pose;
let song;
let mp3;
let points;
let particleSystem;
let canvasRotation = 0;

function preload() {
    song = loadSound('assets/song.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    loadAssets();
}

function draw() {
    background(0);
    mp3.updateVol();
    if (init) {
        push();
        if (points != undefined && points.length > 0) {
            getCanvasRotation();
            rotateY(canvasRotation);
            rotateX(canvasRotation);
            translate(-width/4, -height/4);
            scale(.5);
            noFill();
            stroke(255);
            rect(5, 5, width - 10, height - 10);
        }
        particleSystem.show();
        push();
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
    particleSystem = new ParticleSystem();
}
const getCanvasRotation = () => {
    const distLeft = dist(posePos(0, 'x'), posePos(0, 'y'), posePos(3, 'x'), posePos(3, 'y'));
    const distRight = dist(posePos(0, 'x'), posePos(0, 'y'), posePos(4, 'x'), posePos(4, 'y'));
    const maxDist = dist(posePos(4, 'x'), posePos(4, 'y'), posePos(3, 'x'), posePos(3, 'y')) / 2;
    let left;
    let r;
    distLeft < distRight ? (r = distLeft, left = true) : (r = distRight, left = false);
    left ? canvasRotation = map(r, 0, maxDist, -.2, 0) : canvasRotation = map(r, 0, maxDist, .2, 0);
}
const posePos = (at, which) => {
    return which == 'x' ? width - points[0].pose.keypoints[at].position.x : points[0].pose.keypoints[at].position.y;
}
