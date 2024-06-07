function addItem() {
    // create variables for the list item, and get the inputted text
    var li = document.createElement("li");
    var inputText = document.getElementById("todo-input").value;
    var t = document.createTextNode(inputText); 

    // delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.onclick = deleteItem;

    // add checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Strikethrough function
    var struck = false;
    checkbox.onclick = function() {
        if (!struck) {
            li.style.textDecoration = "line-through";
            struck = true;
        } else {
            li.style.textDecoration = "none";
            struck = false;
        }
    };

    // check if textbox has text
    if (inputText === '') {
        alert("Please put text in the input box");
    } else { 

        // // add text
        document.getElementById("items-list").appendChild(li);
    
        // add item
        li.appendChild(checkbox);
        li.appendChild(t);
        li.appendChild(deleteButton);
    }
}

document.getElementById('todo-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

// delete button functionality
function deleteItem() {
    this.parentNode.remove();
}