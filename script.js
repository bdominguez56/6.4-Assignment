// User Object
const user = {
    name: "John Doe",
    tasks: [], // store tasks
    
    // Object Method
    addTask: function(task) {
        this.tasks.push({ text: task, completed: false });
        this.displayTasks();
    },
    
    // Object Method
    completeTask: function(index) {
        if (this.tasks[index]) {
            this.tasks[index].completed = true;
            this.displayTasks();
        }
    },
    
    // Object Method
    removeCompleted: function() {
        this.tasks = this.tasks.filter(task => !task.completed);
        this.displayTasks();
    },

    // Object Method
    displayTasks: function() {
        const todoList = document.getElementById("todoList");
        todoList.innerHTML = ""; // clear previous content

        this.tasks.forEach((task, index) => {
            let taskDiv = document.createElement("div");
            taskDiv.classList.add("task");
            if (task.completed) taskDiv.classList.add("completed");
            
            taskDiv.innerHTML = `${task.text} 
                <button onclick="user.completeTask(${index})">✔</button>`;
            
            todoList.appendChild(taskDiv);
        });
    }
};

// add a new task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    if (taskInput.value.trim() !== "") {
        user.addTask(taskInput.value.trim());
        taskInput.value = ""; // Clear input
    }
}

// remove completed tasks
function removeCompleted() {
    user.removeCompleted();
}

// display
user.displayTasks();
