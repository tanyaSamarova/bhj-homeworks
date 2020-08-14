'use strict';

const menuLink = document.querySelectorAll(".menu__link");

for (let i = 0; i < menuLink.length; i++) {

  const menuSub = menuLink[i].parentElement.querySelector(".menu_sub");

  menuLink[i].onclick = function() {
    if (menuSub) {
        if (!menuSub.classList.contains("menu_active")) {
            menuSub.classList.add("menu_active");
          } else {
            menuSub.classList.remove("menu_active");
          }     
          return false;
        }
      }
    }