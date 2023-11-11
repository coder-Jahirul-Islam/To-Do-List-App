const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");

function AddTask() {
    if (inputBox.value === '') {
        alert("You must write something!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = '';// Clear the input box after adding the task
    }
}

// Add event listener for the "keydown" event on the input box
inputBox.addEventListener("keydown", function (event) {
    if (event.key == 'Enter') {
        AddTask()

    }
})