
document.addEventListener("DOMContentLoaded", function() {

    let count = 0;

    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-button");
    const taskList = document.getElementById("task-list");
    const taskCount = document.getElementById("task-count");

    function addTask() {

        const taskText = taskInput.value.trim();

        if (taskText === "") {
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        count = count + 1;
        taskCount.textContent = count;

        taskInput.value = "";

        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        deleteButton.addEventListener("click", function(event) {
            event.stopPropagation();

            li.remove();

            count = count - 1;
            taskCount.textContent = count;
        });
    }

    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

});
