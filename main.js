document.addEventListener("DOMContentLoaded", () => {
    const newTaskForm = document.querySelector("#new-task-form");
    const newTaskInput = document.querySelector("#new-task-input");
    const tasksContainer = document.querySelector("#tasks");

    // Function to create a new task element
    const createTaskElement = (task) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const taskContentElement = document.createElement("div");
        taskContentElement.classList.add("content");

        const taskInputElement = document.createElement("input");
        taskInputElement.classList.add("text");
        taskInputElement.type = "text";
        taskInputElement.value = task;
        taskInputElement.setAttribute("readonly", "readonly");

        taskContentElement.appendChild(taskInputElement);

        const taskActionsElement = document.createElement("div");
        taskActionsElement.classList.add("actions");

        const taskEditButton = document.createElement("button");
        taskEditButton.classList.add("edit");
        taskEditButton.innerText = "Edit";

        const taskDeleteButton = document.createElement("button");
        taskDeleteButton.classList.add("delete");
        taskDeleteButton.innerText = "Delete";

        taskActionsElement.appendChild(taskEditButton);
        taskActionsElement.appendChild(taskDeleteButton);

        taskElement.appendChild(taskContentElement);
        taskElement.appendChild(taskActionsElement);

        tasksContainer.appendChild(taskElement);

        taskEditButton.addEventListener("click", () => {
            if (taskEditButton.innerText.toLowerCase() === "edit") {
                taskEditButton.innerText = "Save";
                taskInputElement.removeAttribute("readonly");
                taskInputElement.focus();
            } else {
                taskEditButton.innerText = "Edit";
                taskInputElement.setAttribute("readonly", "readonly");
            }
        });

        taskDeleteButton.addEventListener("click", () => {
            tasksContainer.removeChild(taskElement);
        });
    };

    // Add event listener to the form to handle new task submissions
    newTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = newTaskInput.value.trim();

        if (task) {
            createTaskElement(task);
            newTaskInput.value = "";
        }
    });
});
