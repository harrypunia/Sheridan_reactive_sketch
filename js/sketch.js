let points;
let mp3;
let capture;
let blink = 0;
let handX = 0;
let handY = 0;

class Sketch {
    constructor() {
        capture = createCapture(VIDEO);
        capture.size(capture.width * 4, capture.height * 4);
        ml5.poseNet(capture, poseLoaded).on('pose', (poses) => points = poses);
        this.particleSystem = new ParticleSystem(points);
        this.rot = { y: 0, z: 0 }
        this.navigator = new Navigator();
    }
    init() {
        displayPerformance();
        mp3.updateVol(); //can fetch mp3.vol and mp3.smoothVol
        push();
        if (points != undefined && points.length > 0) {
            getCnvRot(this.rot);
            translate(-width / 4 - (mp3.smoothVol * width / 20), -height / 4 - (mp3.smoothVol * height / 20), 1); //WEGBL aligns canvas to bottom right [fixed]
            scale(.5 + mp3.smoothVol / 10, .5 + mp3.smoothVol / 10, 1);
            noFillStroke(100, 10, 80);
            rect(0, 0, width, height);
        }
        this.particleSystem.show();
        push();
    }
    menu() {
        noFillStroke(80, 47, 152);
        push();
        translate(-width / 2, -height / 2);
        if (points != undefined && points.length > 0) {
            this.navigator.navigate();
            this.navigationVisuals();
        }
        pop();
    }
    navigationVisuals() {
        if (this.navigator.isOn(intro)) { //hold to play animation
            introText.innerHTML = 'Hold to play song';
            introText.style.transform = 'scale(1.0' + this.navigator.counter.main + ')'
            this.navigator.highlight();
            this.navigator.counter.main++;
            this.navigator.counter.main >= 60 ? initSketch() : 0;
        } else { //reset animation
            introText.style.transform = 'scale(1.0)';
            introText.innerHTML = 'Raise your hand';
            this.navigator.counter.main = 0;
            this.navigator.reset();
        }
        selectSong(this.navigator);
    }
    displayActiveSong(num) { //highlight selected song.
        for (let i = 0; i < songs.length; i++) {
            songs[i].removeAttribute('active');
        }
        songs[num].setAttribute('active', '');
    }
}
