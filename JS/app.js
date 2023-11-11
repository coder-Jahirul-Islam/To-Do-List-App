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
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
}

// Add event listener for the "keydown" event on the input box
inputBox.addEventListener("keydown", function (event) {
    if (event.key == 'Enter') {
        AddTask()

    }
})

// Add event listener for list items in listContainer
listContainer.addEventListener("click", function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
    }
})