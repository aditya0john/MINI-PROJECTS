let songIndex = 0;
let audioElement = new Audio('songs/.mp3');
let playit = document.getElementById("playit");
let myprogressbar = document.getElementById("myprogressbar");
let songitems = Array.from(document.getElementsByClassName('songitem'));
let cover = Array.from(document.getElementsByClassName('right'));
let hide = document.getElementsByClassName('songbanner');
let i;
var volu3 = document.getElementById('vol-control');
let playicon = Array.from(document.getElementsByClassName('icons'));
let nps = document.getElementById('name');

//this is volume bar
document.getElementById('vol-control').addEventListener('click',()=>{ 
        var x = volu3.value;
        var y = x / 100;
        audioElement.volume = y;

})


// this is to switch play and pause button
let plpa = [
    {path: "play.png"},
    {path: "pause.png"},
]


// this is list of songs, their paths and covers
let songs = [
    {songName: "LET ME LOVE YOU", filePath:"songs/Let Me Love You.mp3", coverPath: "covers/let me love you.jpg"},
    {songName: "BABY", filePath:"songs/baby.mp3", coverPath: "covers/baby.jpg"},
    {songName: "DESPACITO", filePath:"songs/despacito.mp3", coverPath: "covers/despacito.png"},
    {songName: "HEY MAMA", filePath:"songs/hey mama.mp3", coverPath: "covers/hey mama.png"},
    {songName: "MERE SAMNE WALI KHIDKI MEIN", filePath:"songs/mere samne wali khidki mein.mp3", coverPath: "covers/mere samne wali khidki mein.jpg"},
    {songName: "YUMMY", filePath:"songs/yummy.mp3", coverPath: "covers/yummy.png"},
    {songName: "JEENA JEENA", filePath:"songs/jeena jeena.mp3", coverPath: "covers/jeena jeena.jpeg"},
    {songName: "PERFECT", filePath:"songs/perfect.mp3", coverPath: "covers/perfect.jpg"},
    {songName: "RAAT KALI EK KHWAAB MEIN AYI", filePath:"songs/raat kali ek khwaab mein ayi.mp3", coverPath: "covers/raat kali ek khwaab mein ayi.jpg"},
    {songName: "HAWAYEIN", filePath:"songs/hawayein.mp3", coverPath: "covers/hawayein.jpg"},
]


// this is to assign every song its path and cover using array 'songs'
songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})


// this is to play and pause song and change play button into pause and vice-versa
playit.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
    else
        audioElement.pause(); 
        playicon.forEach((element,i)=>{
            element.getElementsByTagName("img")[1].src = plpa[1].path; 
        })
})




// this is to make progress bar change with time
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})



// this is to change progressbar value
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = (myprogressbar.value * audioElement.duration)/100;
})




// this is to play song by clicking on a button in front them and add name of playing song
Array.from(document.getElementsByClassName('songitem')).forEach((element)=>{
    element.addEventListener('click',(e,i)=>{
            i= parseInt(e.target.id-1);
            x = songs[i].filePath;
            cover.forEach((get)=>{
                get.getElementsByTagName("img")[0].src = songs[i].coverPath;
                nps.innerText = `||${songs[i].songName}||`;
            })

            console.log(x);
            
            audioElement.src = `${x}`;
            if(audioElement.paused || audioElement.currentTime<=0){
                audioElement.play(); 
                playicon.forEach((element,i)=>{
                    element.getElementsByTagName("img")[1].src = plpa[1].path; 
                })
            }   
            else
                audioElement.pause();
            
        document.getElementById('next').addEventListener('click',()=>{
            if(i>9){
                i=0;
            }
            else{
                i+=1;
                
            }
            x = songs[i].filePath;
                cover.forEach((get)=>{
                    get.getElementsByTagName("img")[0].src = songs[i].coverPath;
                })
                console.log(x);
                audioElement.src = `${x}`;
                audioElement.play(); 
        })

        document.getElementById('previous').addEventListener('click',()=>{
            if(i<0){
                i=0; 
            }
            else{
                i-= 1;
            } 
            x = songs[i].filePath;
            cover.forEach((get)=>{
                get.getElementsByTagName("img")[0].src = songs[i].coverPath;
            })
            console.log(x);
            audioElement.src = `${x}`;
            audioElement.play();
        })
    })
})
