const selectSong = (navigator) => {
    if (navigator.isOn(songs[0])) {
        loadSong(0);
    } else if (navigator.isOn(songs[1])) {
        loadSong(1);
    } else if (navigator.isOn(songs[2])) {
        loadSong(2);
    }
}

const loadSong = (num) => {
    activeSong = num;
    for (let i = 0; i < songs.length; i++) { songs[i].removeAttribute('active'); }
    songs[num].setAttribute('active', '');
}