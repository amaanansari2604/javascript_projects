console.log("welcome to spotify")

// initialize the variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "zara-sa", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "tu hi haqeeqat", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "mera bina", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "ek din teri raahon", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"}
]


// audioElement.play();

masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-circle-play')
    }
})
//listen to events

audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;

})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTimee = myprogressbar.value * audioElement.duration/100;
})