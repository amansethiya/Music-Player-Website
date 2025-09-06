


let songindex = 0;

let audioElement = new Audio('resourse/1.mp3');
//audioElement.play();

let masterplay = document.getElementById('masterplay');


let progressbar = document.getElementById('progressbar');

let gif = document.getElementById('gif');

let mastersongname = document.getElementById('mastersongname');

let songitems = Array.from(document.getElementsByClassName('songitems'));


let songs = [
    { songname: "barbaad", filePath: "resourse/1.mp3", coverPath: "resourse/barbad.jpg" },
    { songname: "dhun", filePath: "resourse/2.mp3", coverPath: "resourse/dhun.jpg" },
    { songname: "barbaad Reprise - Female", filePath: "resourse/3.mp3", coverPath: "resourse/barbaadr.jpg" },
    { songname: "tum ho tho", filePath: "resourse/4.mp3", coverPath: "resourse/tumhotho.jpg" },
    { songname: "saiyaara", filePath: "resourse/5.mp3", coverPath: "resourse/saiyaara.jpg" },
    { songname: "humsafar", filePath: "resourse/6.mp3", coverPath: "resourse/humsafar.jpg" },
    { songname: "saiyaara reprise - female", filePath: "resourse/7.mp3", coverPath: "resourse/saiyaarar.jpg" }
]

songitems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});



masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    progressbar.value = progress;
});

progressbar.addEventListener('change', () => {
    audioElement.currentTime = progressbar.value * audioElement.duration / 100;
})

const makeallplays = () => {
    Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `resourse/${songindex}.mp3`;
        mastersongname.innerText = songs[songindex - 1].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})


document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 8) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }

    audioElement.src = `resourse/${songindex}.mp3`;
    mastersongname.innerText = songs[songindex - 1].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

});

document.getElementById('previous').addEventListener('click', () => {
    if (songindex > 0) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }

    audioElement.src = `resourse/${songindex}.mp3`;
    mastersongname.innerText = songs[songindex - 1].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

});