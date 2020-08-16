'use strict';

const dropdownValue = document.getElementsByClassName('dropdown__value')[0];
const dropdownList = document.getElementsByClassName('dropdown__list')[0];
const dropdownLink = document.getElementsByClassName('dropdown__link');

dropdownValue.addEventListener('click', function() {
    dropdownList.classList.toggle('dropdown__list_active');
})

for (let i = 0; i < dropdownLink.length; i++) {
dropdownLink[i].addEventListener('click', function(event) {
    event.preventDefault();
    dropdownList.classList.remove('dropdown__list_active');
    dropdownValue.textContent = this.textContent;
  })
}