'use strict';

const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const taskControl = document.querySelector(".tasks__control");

taskControl.addEventListener("submit", (e) => {

    e.preventDefault();
    
    if (taskInput.value != "") {
      tasksList.insertAdjacentHTML("beforeEnd",
        `<div class="task">
      <div class="task__title">
      ${taskInput.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`
      );
      
      tasksList.lastChild.addEventListener("click", function (event) {
        this.closest(".task").remove();
      });
    };
  
  taskInput.value = '';
});