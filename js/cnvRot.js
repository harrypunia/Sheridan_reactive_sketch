const getCnvRot = (rot) => {
    getRotY(rot);
    getRotZ(rot);
    rotateY(rot.y);
    rotateZ(rot.z);
}
const getRotY = (rot) => {
    const maxDist = pointGap(4, 3) / 2;
    let invert = 1;
    let chosenSide = 0.0;
    pointGap(0, 3) < pointGap(0, 4) ? (chosenSide = pointGap(0, 3), invert = -1) : chosenSide = pointGap(0, 4);
    rot.y = lerp(rot.y, map(chosenSide, 0, maxDist, invert * .2, 0), 0.05);
}
const getRotZ = (rot) => {
    const zAngle = posePos(3).y - posePos(4).y;
    const earDist = pointGap(0, 4);
    rot.z = lerp(rot.z, map(zAngle, -earDist, earDist, .2, -.2), 0.05);
}