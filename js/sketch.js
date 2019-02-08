let init = false,
    col = {
        0: {
            r: 30,
            g: 10,
            b: 22
        }
    },
    song,
    amp,
    vol,
    video;

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
    video = createCapture(VIDEO);
    video.size(window.innerWidth, window.innerHeight);
}

function draw() {
    vol = amp.getLevel();
    background(col[0].r, col[0].g, col[0].b);
    if (init) {
        image(video, 0, 0);
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}


const initSketch = () => {
    init = true;
    song.play();
    let btn = document.getElementById('play');
    btn.style.display = 'none';
}
