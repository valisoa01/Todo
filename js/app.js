const tasks = [];
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const task = taskInput.value;
    if(task.trim() === "") {
        return;
    }
    tasks.push(task);
    console.log(tasks);
    taskInput.value = "";
    
})