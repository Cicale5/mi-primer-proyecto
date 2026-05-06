let myTasks = [];

const buttonAdd = document.getElementById("add");
const buttonSave = document.getElementById("save");
const buttonComplete = document.getElementById("complete");
const buttonDelete = document.getElementById("delete");

const formSection = document.querySelector(".input");
const inputBox = document.getElementById("task");
const ulList = document.querySelector(".list ul");

function showAddInput() {
    currentAction = "create";
    inputBox.placeholder = "Escribe tu nueva tarea...";
    inputBox.type = "text";
    formSection.classList.add("visible");
}

function showCompleteInput() {
    currentAction = "finish";
    inputBox.placeholder = "Número de tarea a completar (1, 2...):";
    inputBox.type = "number";
    formSection.classList.add("visible");
}

function showDeleteInput() {
    currentAction = "remove";
    inputBox.placeholder = "Número de tarea a eliminar (1, 2...):";
    inputBox.type = "number";
    formSection.classList.add("visible");
}

function saveAction() {

    let textInside = inputBox.value;

    if (textInside === "") {
        return;
    }

    if (currentAction === "create") {
        let taskObject = {
            name: textInside,
            completed: false
        };
        myTasks.push(taskObject);
        console.log("Tarea creada exitosamente!");
    }

    if (currentAction === "finish") {
        let numberTyped = parseInt(textInside);
        let arrayIndex = numberTyped - 1;

        if (arrayIndex >= 0 && arrayIndex < myTasks.length) {
            myTasks[arrayIndex].completed = true;
            console.log("Tarea completada exitosamente!");
        } else {
            alert("Número de tarea no válido, intenta de nuevo!");
        }
    }

    if (currentAction === "remove") {
        let numberTyped = parseInt(textInside);
        let arrayIndex = numberTyped - 1;

        if (arrayIndex >= 0 && arrayIndex < myTasks.length) {
            myTasks.splice(arrayIndex, 1);
            console.log("Tarea eliminada exitosamente!");
        } else {
            alert("Número de tarea no válido, intenta de nuevo!");
        }
    }

    formSection.classList.remove("visible");
    inputBox.value = "";

    drawList();
}

function drawList() {

    ulList.innerHTML = "";

    for (let i = 0; i < myTasks.length; i++) {
        let currentTask = myTasks[i];

        let newLi = document.createElement("li");

        newLi.textContent = currentTask.name + " - Completada: " + currentTask.completed;

        ulList.appendChild(newLi);
    }
}

buttonAdd.addEventListener("click", showAddInput);
buttonComplete.addEventListener("click", showCompleteInput);
buttonDelete.addEventListener("click", showDeleteInput);
buttonSave.addEventListener("click", saveAction);
