class Task{

    constructor(task, state, id){
        this.task = task;
        this.state = state;
        this.id = id;
    }
    render(container) {
        let tarea = document.createElement('div');
        tarea.classList.add('card');

        let html = `<button onclick="errase(${this.id})" class="x">X</button>
                    <p>${this.task}</p>
                    <div class="botones">
                    <button class="blue" id="blueBtn${this.id}" onclick="upgrade(${this.id})"></button>
                    <button class="red" id="redBtn${this.id}" onclick="downgrade(${this.id})"></button>
                    </div>`;

        tarea.innerHTML += html;
        container.appendChild(tarea);
    }

}