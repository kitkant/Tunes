import {addZero} from "./supportScript.js";

export const videoPlayerInit = () =>{


    const videoPlayer = document.querySelector('.video-player'),
        videoVolume = document.querySelector('.video-volume'),
        videoButtonPlay = document.querySelector('.video-button__play'),
        videoButtonStop = document.querySelector('.video-button__stop'),
        videoTimePassed = document.querySelector('.video-time__passed'),
        videoProgress = document.querySelector('.video-progress'),
        videoTimeTotal = document.querySelector('.video-time__total')

    const toggleIcon = () =>{
        if(videoPlayer.paused) {
            videoButtonPlay.classList.remove('fa-pause')
            videoButtonPlay.classList.add('fa-play')
        } else {
            videoButtonPlay.classList.remove('fa-play')
            videoButtonPlay.classList.add('fa-pause')
        }
    }

    const togglePlay = ()=> {
        if(videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause()
        }
        toggleIcon();
    }
    const  stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0
    }

    videoPlayer.addEventListener('click', togglePlay )
    videoButtonPlay.addEventListener('click', togglePlay );

    videoPlayer.addEventListener('play',toggleIcon)
    videoPlayer.addEventListener('pause',toggleIcon)

    videoButtonStop.addEventListener('click', stopPlay)

    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;

        videoProgress.value = (currentTime / duration) * 100

        let minutePassed = Math.floor(currentTime / 60);
        let secondsPassed = Math.floor(currentTime % 60);

        let minuteTotal = Math.floor(duration / 60);
        let secondsTotal = Math.floor(duration % 60);

        videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`
        videoTimeTotal.textContent = addZero(minuteTotal)  + ':' + addZero(secondsTotal)

    });

    videoProgress.addEventListener('change', () => {
        const duration = videoPlayer.duration;
        const value = videoProgress.value;

        videoPlayer.currentTime = (value * duration) / 100;
    });

    videoVolume.addEventListener('input', () =>{
        videoPlayer.volume = videoVolume.value / 100
    })
    videoPlayer.volume = 0.5;
    videoVolume.value = videoPlayer.volume * 100;
}