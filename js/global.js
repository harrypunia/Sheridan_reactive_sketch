const posePos = (at, which) => which == 'x' ? width - points[0].pose.keypoints[at].position.x : points[0].pose.keypoints[at].position.y
const pointGap = (n1, n2) => dist(posePos(n1, 'x'), posePos(n1, 'y'), posePos(n2, 'x'), posePos(n2, 'y'));