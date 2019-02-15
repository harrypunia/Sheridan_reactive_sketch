const posePos = at => {
    return {
        x: width - map(points[0].pose.keypoints[at].position.x, 0, capture.width, 0, width),
        y: map(points[0].pose.keypoints[at].position.y, 0, capture.height, 0, height)
    }
};
const pointGap = (n1, n2) => dist(posePos(n1).x, posePos(n1).y, posePos(n2).x, posePos(n2).x);
const poseLoaded = () => {
    loading.style.width = '100vw';
    setTimeout(() => {
        loading.classList.add('hide');
        intro.classList.add('in')
        ml5Loaded = true;
        introSound.play();
    }, 1000);
    console.log('ml5 has been loaded');
}