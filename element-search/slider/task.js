'use strict';

const sliderArrowPrev = document.getElementsByClassName('slider__arrow_prev')[0];
const sliderArrowNext = document.getElementsByClassName('slider__arrow_next')[0];
const sliderItem = document.querySelectorAll('.slider__item');

let number = 0;

function activeSlide() {
    sliderItem[number].className = 'slider__item slider__item_active';
}

sliderArrowPrev.onclick = function () {
    sliderItem[number].className = 'slider__item';
    number--;
    if (number < 0) {
        number = sliderItem.length - 1;
    }
        activeSlide();
    
}
sliderArrowNext.onclick = function () {
    sliderItem[number].className = 'slider__item';
    number++;
    if (number >= sliderItem.length) {
        number = 0;
    }
        activeSlide();
    
}