/*Global functions required throughout the sketch to do repeated math
  inclides posePos, which returns the position of each posePoint
  point gap returns gap between to posePoints, which gets their pos using posePos() and calc the gap using dist() func from p5 lib.
*/

const posePos = at => {
    return {
        x: width - map(points[0].pose.keypoints[at].position.x, 0, capture.width, 0, width), //ml5 object
        y: map(points[0].pose.keypoints[at].position.y, 0, capture.height, 0, height)
    }
};
const pointGap = (n1, n2) => dist(posePos(n1).x, posePos(n1).y, posePos(n2).x, posePos(n2).x); //ES6 function
const poseLoaded = () => {
    loading.style.width = '100vw';
    setTimeout(() => {
        //hide all loading visuals and display menu items
        logo.style.display = 'none';
        loading.style.display = 'none';
        intro.classList.add('in')
        ml5Loaded = true;
        desc.setAttribute('dir', 'out');
        introSound.play();
        songMenu.setAttribute('in', '');
    }, 1000);
    console.log('ml5 has been loaded');
}