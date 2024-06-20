// script.js

document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const newFormItem = document.getElementById('new-item');
    const addFormItem = document.getElementById('add-item');

    addFormItem.addEventListener('click', function(e) {
        e.preventDefault();
        const newItemText = newFormItem.value.trim();
        if (newItemText) {
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';
            todoItem.innerHTML = `
                <input type="checkbox">
                <span>${newItemText}</span>
                <button>Delete</button>
            `;
            todoList.appendChild(todoItem);
            newFormItem.value = '';
            setTimeout(() => {
                todoItem.classList.add('highlight');
            }, 50);
            setTimeout(() => {
                todoItem.classList.remove('highlight');
            }, 500);
        }
    });

    todoList.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            const todoItem = e.target.parentNode;
            todoItem.remove();
        } else if (e.target.tagName === 'INPUT') {
            const todoItem = e.target.parentNode;
            todoItem.classList.toggle('done');
        }
    });
});
