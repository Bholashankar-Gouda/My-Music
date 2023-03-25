console.log("Welcome to my Music Player");

let SongIndex=0;
let audioElement = new Audio('02.mp3');
let MasterPlay = document.getElementById('MasterPlay');
let ProgressBar  = document.getElementById('ProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
let album = document.getElementById('album');
let songitems = Array.from(document.getElementsByClassName('songitems'));

let  songs=[
    {SongName:"Ek Din Pyar", filePath:"1.mp3", Cover:"cover1.jpg"},
    {SongName:"Tujh Bin", filePath:"2.mp3", Cover:"cover2.jpg"},
    {SongName:"Tum Hi Ho", filePath:"3.mp3", Cover:"cover3.jpg"},
    {SongName:"Tujhe Sochta Hoon", filePath:"4.mp3", Cover:"cover4.jpg"},
    {SongName:"Kaali Kaali", filePath:"5.mp3", Cover:"cover5.jpg"},
    {SongName:"Kesariya", filePath:"6.mp3", Cover:"cover6.jpg"},
    {SongName:"Jane Kyon", filePath:"7.mp3", Cover:"cover7.jpg"},
    {SongName:"Uska Hi Bana", filePath:"8.mp3", Cover:"cover8.jpg"},
    {SongName:"Zara Sa", filePath:"9.mp3", Cover:"cover9.jpg"},
    {SongName:"Janat Janha", filePath:"10.mp3", Cover:"cover10.jpg"}
]
songitems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].Cover;
    element.getElementsByClassName("SongNames")[0].innerText = songs[i].SongName;

})

// audioElement.play();

//Song controls playback
MasterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
       audioElement.play();
       MasterPlay.classList.remove('fa-play-circle');
       MasterPlay.classList.add('fa-pause-circle');
       gif.style.opacity=1;
    }

    else
    {
       audioElement.pause();
       MasterPlay.classList.remove('fa-pause-circle');
       MasterPlay.classList.add('fa-play-circle');
       gif.style.opacity=0;
    }
})

//Listen To Events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress = parseFloat((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    ProgressBar.value = progress;
})

ProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('SongPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('SongPlay')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
        // if(audioElement.paused || audioElement.currentTime<=0)
        // {
            makeAllPlays();
            SongIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            masterSongName.innerHTML = songs[SongIndex].SongName; 
            audioElement.src = `songs/${SongIndex+1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            MasterPlay.classList.remove('fa-play-circle');
            MasterPlay.classList.add('fa-pause-circle');
        // }
        // else    
        // {
        //     makeAllPlays();
        //     audioElement.pause();
        //     e.target.classList.remove('fa-pause-circle');
        //     e.target.classList.add('fa-play-circle');
        //     MasterPlay.classList.remove('fa-pause-circle');
        //     MasterPlay.classList.add('fa-play-circle');
        // }

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(SongIndex>=10){
       SongIndex=0;
    }
    else{
       SongIndex += 1;
    }
    audioElement.src = `songs/${SongIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    MasterPlay.classList.remove('fa-play-circle');
    MasterPlay.classList.add('fa-pause-circle');
})
    
document.getElementById('previous').addEventListener('click',()=>{
    if(SongIndex<=0){
       SongIndex=0;
    }
    else{
       SongIndex -= 1;
    }
    audioElement.src = `songs/${SongIndex+1}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    MasterPlay.classList.remove('fa-play-circle');
    MasterPlay.classList.add('fa-pause-circle');
})

//PreLoader
var preloading = document.getElementById('preload');
    window.addEventListener("load",function(){
        preloading.style.display = "none";
    })