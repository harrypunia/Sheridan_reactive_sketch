/* Displays the loading of the screens responsive to songs and ml5 lib
   Removes assets when ml5 is loaded and adds assets for menu screen
   Plays ping sound.
*/

const displayLoading = () => {
    if (songsLoaded != true) {
        let manyLoaded = songList.filter(each => each.isLoaded()).length;
        loading.style.width = manyLoaded / songs.length * 75 + 'vw';
        manyLoaded >= songList.length ? (songsLoaded = true, console.log('songs have been loaded')) : 0;
    }
}

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