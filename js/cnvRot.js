/* getCnvRot gets canvas rotations using posePoints
   rot object is passes from sketch which is used to manipulate rotateY and Z
   Note: [x axis is switched with y in WEGBL by default]
*/

const getCnvRot = (rot) => {
    getRotY(rot);
    getRotZ(rot);
    rotateY(rot.y);
    rotateZ(rot.z);
}
const getRotY = (rot) => {
    const maxDist = pointGap(4, 3) / 2;
    let invert = 1;
    let chosenSide = 0.0; //choosing sides, as to which ear is nose closer to, to get angle.
    pointGap(0, 3) < pointGap(0, 4) ? (chosenSide = pointGap(0, 3), invert = -1) : chosenSide = pointGap(0, 4);
    rot.y = lerp(rot.y, map(chosenSide, 0, maxDist, invert * .2, 0), 0.05);
}
const getRotZ = (rot) => {
    const zAngle = posePos(3).y - posePos(4).y; //difference in y pos of ear points, to get angle
    const earDist = pointGap(3, 4);
    rot.z = lerp(rot.z, map(zAngle, -earDist, earDist, .2, -.2), 0.05);
}