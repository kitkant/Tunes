import {videoPlayerInit} from "./videoPlayer.js";

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block')
const temp = document.querySelector('.temp')

const deactivationPlayer = ()=>{
    playerBtn.forEach(item=> item.classList.remove('active'))
    playerBlock.forEach(item=> item.classList.remove('active'))
}

playerBtn.forEach((btn,i) => btn.addEventListener('click', ()=>{
        deactivationPlayer()
        temp.style.display = 'none'
        btn.classList.add('active')
        playerBlock[i].classList.add('active')
    }));
videoPlayerInit()
