function strikeThrough(ev, cb) {
    if (ev.target.style.textDecoration === "line-through") {
        ev.target.style.textDecoration = "none";
        cb.checked = false;
    } else {
        ev.target.style.textDecoration = "line-through";
        cb.checked = true;
    }
}

function addItem() {
    var maxChars = 50;  // Define the maximum number of characters allowed

    // create variables for the list item, and get the inputted text
    var li = document.createElement("li");
    var inputText = document.getElementById("todo-input").value;

    // Check if the input text exceeds the maximum number of characters
    if (inputText.length > maxChars) {
        alert(`Please limit the text to ${maxChars} characters.`);
        return; 
    }

    var t = document.createTextNode(inputText);

    // delete button
    var deleteButton = document.createElement("button");
    deleteButton.onclick = deleteItem;

    // add checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // check if textbox has text
    if (inputText === '') {
        alert("Please put text in the input box");
    } else {
        li.onclick = function(ev) {
            strikeThrough(ev, checkbox);
        };

        // add text
        document.getElementById("items-list").appendChild(li);

        // add item
        li.appendChild(checkbox);
        li.appendChild(t);
        li.appendChild(deleteButton);
    }

    // Clear the input box after adding the item
    document.getElementById("todo-input").value = '';
}

// delete button functionality
function deleteItem() {
    this.parentNode.remove();
}
