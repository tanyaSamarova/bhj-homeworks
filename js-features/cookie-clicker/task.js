'use strict';

const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');

cookie.onclick = () => {
    if (cookie.width === 200) {
        cookie.width = 230;
    } else {
        cookie.width = 200;
    }
    clickerCounter.textContent++;
}
