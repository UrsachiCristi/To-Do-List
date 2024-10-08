addButton.addEventListener("click",()=>{
    if (input.value.trim() === "") {
        alert("Please enter a task.");
        return; // Prevent adding empty tasks
    }

    const listItem = document.createElement("div");
    listItem.classList.add("task");
    const listItemRadio = document.createElement("input");
    listItemRadio.classList.add("radiobtn");
    listItemRadio.type = "radio";
    const listItemText = document.createElement("div");
    listItemText.classList.add("text1");
    const listItemIcon = document.createElement("i");
    listItemIcon.classList.add("fa", "fa-trash-o");
    listItemIcon.classList.add("trash");

    listItemText.innerHTML = input.value;
    listItem.appendChild(listItemRadio);
    listItem.appendChild(listItemText);
    listItem.appendChild(listItemIcon);

    list.appendChild(listItem);
    input.value = "";

});