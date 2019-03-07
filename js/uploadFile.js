function lookForUpload() {
    //p5.dom.js
    dropFiles = select("#upload");
    dropFiles.dragOver(highlight);
    dropFiles.dragLeave(resetHighlight);
    dropFiles.drop(loadFile, resetHighlight); //loads file on to local browser
}

function resetHighlight() {
    dropFiles.style("background-color", "rgb(30, 87, 152)")
}

function highlight() {
    console.log('working');
    dropFiles.style("background-color", "rgb(221, 57, 57)")
}

function loadFile(file) {
    console.log(file);
    songList.push(loadSound(file));
    activeSong = songList.length - 1;
    while(songList[songList.length - 1].isLoaded() == false) {
        console.log(songList[songList.length - 1].isLoaded());
    }
    initSketch(); //starts sketch
}