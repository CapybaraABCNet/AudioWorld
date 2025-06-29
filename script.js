const audioFiles = [
    'kot_-_myaukane.mp3',
    'dog-bark-15.mp3',
    '55dpy3iv.mp3',
    'guinea-pig-1_gjrg6zn_.mp3',
    'z_uk-slona.mp3',
    'tigr.mp3',
    'volk.mp3'
];

const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

function playRandomAudio() {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    
    audioPlayer.src = audioFiles[randomIndex];
    
    audioPlayer.play();
}


playButton.addEventListener('click', playRandomAudio);
