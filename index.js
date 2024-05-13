const addButton = document.getElementById('add-task');
const taskInput = document.getElementById('input-task');
const taskOutput = document.getElementById('list-of-task');

loadTask();

function addTask(){
    const task = taskInput.value.trim();
    
    if(task){
        createTaskElement(task);
        taskInput.value = '';

        saveTask()
    } else{
        alert('Input is empty')
    }
}


function createTaskElement(task){

    const listItem = document.createElement('li');
    listItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteTask';

    listItem.appendChild(deleteButton);
    taskOutput.appendChild(listItem);

    deleteButton.addEventListener('click', function(){
        taskOutput.removeChild(listItem);
        saveTask();
    });
}


function saveTask(){
    let tasks = [];
    
    taskOutput.querySelectorAll('li').forEach(function(item){
        tasks.push(item.textContent.replace('Delete', '').trim());
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function loadTask(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(createTaskElement);
    
}