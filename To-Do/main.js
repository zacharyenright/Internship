function addItem() {
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

    if (inputText === '') {
        alert("Please put text in the input box");
    } else { 

        // add text
        document.getElementById("items-list").appendChild(li);
    
        // add item
        li.appendChild(checkbox);
        li.appendChild(t);
        li.appendChild(deleteButton);
        
        // Append list item to the list
        document.getElementById("items-list").appendChild(li);
    }
}

function deleteItem() {
    this.parentNode.remove(); // Remove the parent node of the clicked button (which is the list item)
}