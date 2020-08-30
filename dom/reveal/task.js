'use strict'

let reveal = document.querySelectorAll('.reveal');

for (let i = 0; i < reveal.length; i++) {

    window.addEventListener('scroll', () => {

        if (reveal[i].getBoundingClientRect().top < window.innerHeight) {
            reveal[i].classList.add('reveal_active');
        } else {
            reveal[i].classList.remove('reveal_active');
        }
    })
}