'use strict'

const rotatorCase = document.querySelectorAll('.rotator__case');
const number = 0;

function changeAds() {
    rotatorCase[number].classList.remove('rotator__case_active');           
    number = (number === rotatorCase.length - 1) ? 0 : number + 1;
    rotatorCase[number].classList.add('rotator__case_active');
};

setInterval(changeAds, 1000);