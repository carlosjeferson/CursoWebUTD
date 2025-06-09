const taskInput = document.getElementById('taskText');
const taskList = document.getElementById('taskList');

function addTask(){
    const taskText = taskInput.value.trim();
    if( taskText !== ""){
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskText}</span>
        <button class="editButton" onclick="editTask( this )">Editar</button>
        <button class="deleteButton" onclick="deleteTask( this )">Remover</button>`

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function editTask( button ){
    const li =  button.parentElement;
    const span = li.querySelector("span");
    const newText = prompt("Editar Tarefa: ", span.textContent);
    if( newText !== null && newText !== ""){
        span.textContent = newText;
    }
}


function deleteTask( button ){
    const li = button.parentElement;
    taskList.removeChild(li);
}