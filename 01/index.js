// Находим необходимые элементы DOM и записать в переменные
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Создаем функцию createTask()
function createTask() {
    const taskText = taskInput.value; // Получаем значение из поля ввода
    const newTask = document.createElement('li'); // Создаем новый элемент списка
    newTask.textContent = taskText; // Присваиваем текст из поля ввода в качестве содержимого новой задачи
    taskList.append(newTask); // Добавляем новую задачу в список
    taskInput.value = ''; // Очищаем поле ввода
}

// Создаем функцию checkTask()
function checkTask(event) {
    const clickedTask = event.target; // Проверяем, что кликнули на элемент списка
    clickedTask.classList.toggle('completed'); // Переключаем состояние выполнения задачи, добавляя или удаляя класс
}

// Добавляем функцию-обработчик к событию клика на кнопку
addButton.addEventListener('click', createTask);

// Добавляем функцию-обработчик к событию клика на список задач
taskList.addEventListener('click', checkTask);