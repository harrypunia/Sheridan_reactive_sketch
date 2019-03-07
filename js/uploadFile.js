/*Under construction*/
function lookForUpload() {
    //p5.dom.js
    const dropFiles = select("#upload");
    dropFiles.dragOver(highlight);
    dropFiles.dragLeave(resetHighlight);
    dropFiles.drop(loadFile, resetHighlight); //loads file on to local browser
}

const resetHighlight = () => upload.style.background = 'none'

const highlight = () => upload.style.background = "rgb(221, 57, 57)"

const loadFile = file => file.type === "audio" ? songList.push(loadSound(file, iniSketchWithUserSong)) : alert("invalid file type: Please drop an audio files.");

const iniSketchWithUserSong = () => (activeSong = songList.length - 1, initSketch())