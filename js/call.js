/* All DOM elements needed for this project
   Audio assets also loaded in JS
*/
const intro = document.getElementById('intro');
const introText = intro.getElementsByTagName('p')[0];
const loading = document.getElementById('loading');
const introSound = new Audio('assets/intro.mp3');
const performance = document.getElementById('performance');
const logo = document.getElementById('logo');
const desc = document.getElementById('desc');
const songs = document.getElementsByClassName('songs');
const songMenu = document.getElementsByClassName('songMenu')[0];
const upload = document.getElementById('upload');