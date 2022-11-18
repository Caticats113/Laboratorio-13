//divs pa las tareas
const toDoContainer = document.getElementById('toDoContainer');
const doingContainer = document.getElementById('doingContainer');
const doneContainer = document.getElementById('doneContainer');
//div add new
const newInput = document.getElementById('newInput');
const publishBtn = document.getElementById('publishBtn');

//lista donde se van a poner las tasks
let tasks = [];
//tomar tareas anteriores en caso de que las haya
let loadedTasks = localStorage.getItem("tasks");
if(loadedTasks !== null){
    tasks = JSON.parse(loadedTasks);
};

//poner las tareas desde el inicio
function showTasks(){
    toDoContainer.innerHTML = "";
    doingContainer.innerHTML = "";
    doneContainer.innerHTML = "";

    for(let i = 0; i<tasks.length; i++){
            let task = new Task(
                tasks[i].task, tasks[i].state, tasks[i].id = i
            );
            if(task.state == 0){
                task.render(toDoContainer);
            }
            if(task.state == 1){
                task.render(doingContainer);
                }
            if(task.state == 2){
                task.render(doneContainer);
            }
        }
        console.log(tasks)
};



showTasks();

//funcion de crear las tareas
function post(){
    if(newInput.value !== ""){
        let text = newInput.value;
        let state = 0;
        let id = tasks.length;
        let task = new Task(text, state, id);
        tasks.push(task);
        let json = JSON.stringify(tasks);
        localStorage.setItem("tasks", json)
    }
    showTasks();
    newInput.value = "";
};
//crear el post cuando clickeas añadir
publishBtn.addEventListener('click', post);



function upgrade(id){
    if(tasks[id].state < 2){
        let text = tasks[id].task;
        let state = tasks[id].state + 1;
        console.log(state);
        borrateWacho(id);
        let code = id;
        let task = new Task(text, state, code);
        tasks.push(task);
        let json = JSON.stringify(tasks);
        localStorage.setItem("tasks", json)
    }
    showTasks();
}

function downgrade(id){
    if(tasks[id].state > 0){
        let text = tasks[id].task;
        let state = tasks[id].state - 1;
        console.log(state);
        borrateWacho(id);
        let code = id;
        let task = new Task(text, state, code);
        tasks.push(task);
        let json = JSON.stringify(tasks);
        localStorage.setItem("tasks", json)
    }
    showTasks();
}

function borrateWacho(id){
    tasks.splice(id, 1);
}

function errase(id){
    borrateWacho(id);
    let json = JSON.stringify(tasks);
    localStorage.setItem("tasks", json)
    showTasks();
}