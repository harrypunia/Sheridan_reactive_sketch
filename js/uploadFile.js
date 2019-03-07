/*Under construction*/

function lookForUpload() {
    //p5.dom.js
    dropFiles = select("#upload");
    dropFiles.dragOver(highlight);
    dropFiles.dragLeave(resetHighlight);
    dropFiles.drop(loadFile, resetHighlight); //loads file on to local browser
}

const resetHighlight = () => dropFiles.style("background-color", "rgb(30, 87, 152)")

const highlight = () => dropFiles.style("background-color", "rgb(221, 57, 57)")

const loadFile = file => {
    console.log(file.type);
    songList.push(loadSound(file, iniSketchWithUserSong));
}

const iniSketchWithUserSong = () => {
    activeSong = songList.length - 1;
    initSketch();
}
