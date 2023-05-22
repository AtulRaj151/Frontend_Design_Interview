let imgs = document.querySelectorAll('.item img');
let dots = document.querySelectorAll('.dot');

let currentImg = 0;
const INTERVAL_DURATION  = 3000;

let timeId = setInterval(nextSlide,INTERVAL_DURATION);

function nextSlide(n) {

    for(let i = 0;i < imgs.length;i++) {
          imgs[i].style.opacity = 0;
          dots[i].className = dots[i].className.replace(' active', '');
    }
    currentImg = (currentImg + 1) % imgs.length;

    if( n != undefined) {
        clearInterval(timeId);
        timeId = setInterval(nextSlide,INTERVAL_DURATION);
        currentImg = n;
    }

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';


}


