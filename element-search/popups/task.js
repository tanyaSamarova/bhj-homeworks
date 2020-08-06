'use strict';

const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = Array.from(document.getElementsByClassName('modal__close'));
const showSuccess = Array.from(document.getElementsByClassName('show-success'));

modalMain.className = 'modal modal_active';

for (let i = 0; i < modalClose.length; i++)
    modalClose[i].onclick = () => {
        modalClose[i].closest('.modal').className = 'modal';
        if (modalClose[i] === showSuccess[0])
            modalSuccess.className = 'modal modal_active';
    }