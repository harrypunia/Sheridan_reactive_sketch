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
        loading.style.display = 'none';
        intro.classList.add('in')
        ml5Loaded = true;
        desc.setAttribute('dir', 'out');
        introSound.play();
        songMenu.setAttribute('in', '');
    }, 1000);
    console.log('ml5 has been loaded');
}