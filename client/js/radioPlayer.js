export const radioPlayerInit = () =>{
    const radio = document.querySelector('.radio')
    const radioNavigation = document.querySelector('.radio-navigation')
    const radioCoverImg = document.querySelector('.radio-cover__img')
    const radioItem = document.querySelectorAll('.radio-item')
    const radioHeaderBig = document.querySelector('.radio-header__big')
    const radioStop = document.querySelector('.radio-stop')


    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;

    const changeIconPlay = () => {
        if (audio.paused){
            radio.classList.remove('play')
            radioStop.classList.add('fa-play')
            radioStop.classList.remove('fa-stop')
        } else {
            radio.classList.add('play')
            radioStop.classList.add('fa-stop')
            radioStop.classList.remove('fa-play')
        }
    }
    const selectItem = elem => {
        radioItem.forEach(item => item.classList.remove('select'));
        elem.classList.add('select')
    }
    //делегирование, пойми это уже
    radioNavigation.addEventListener('change', event => {
        const target = event.target;
        const parent = target.closest('.radio-item');

        selectItem(parent);

        const title = parent.querySelector('.radio-name').textContent;
        radioHeaderBig.textContent = title

        const img = parent.querySelector('.radio-img').src
        radioCoverImg.src = img

        radioStop.disabled = false;

        audio.src = target.dataset.radioStantion
        audio.play()
        changeIconPlay()
    })

    radioStop.addEventListener('click', () => {
        if( audio.paused ){

            audio.play();
        } else {
            audio.pause();
        }
        changeIconPlay()
    })
};