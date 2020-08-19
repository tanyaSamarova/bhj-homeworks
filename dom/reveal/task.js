'use strict'

let reveal = document.querySelectorAll('.reveal');

for (let i = 0; i < reveal.length; i++) {

    window.addEventListener('scroll', () => {

        if (reveal[i].getBoundingClientRect().top < window.innerHeight) {
            reveal[i].classList.toggle('reveal_active');

        }
    })
}