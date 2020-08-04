'use strict';

const timer = document.getElementById('timer');
let time = timer.textContent;

const addText = function () {
    const date = new Date(time * 1000).toISOString().substr(11, 8);
    time--;
    timer.textContent = date;

    if (time === 0) {
        alert("Вы победили в конкурсе!");
        time = 59;
    }
}
setInterval(addText, 1000);
