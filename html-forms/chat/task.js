'use strict'

const inputMessage = document.getElementById('chat-widget__input');
const chatMessages = document.querySelector('.chat-widget__messages');
const chatWidget = document.querySelector('.chat-widget');

const messages = [
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать',
    'Кто тут?',
    'Где ваша совесть?',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
    'Добрый день! До свидания!',
    'Мы ничего не будем вам продавать',
];

chatWidget.addEventListener('click', (event) => {
    chatWidget.classList.add('chat-widget_active');
});

inputMessage.addEventListener('keydown', (event) => {

    if (event.code === "Enter" && inputMessage.value != '') {

        const i = Math.floor(Math.random() * messages.length);

        chatMessages.innerHTML += `
			<div class="message message_client">
				<div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
				<div class="message__text">${inputMessage.value}</div>
			</div>  
			<div class="message">
				<div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
				<div class="message__text">${messages[i]}</div>
			</div>`;
        inputMessage.value = '';
    }
});