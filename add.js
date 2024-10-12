const task = document.querySelector(`.task`);

addButton.addEventListener("click",()=>{
    if (input.value.trim() === "") {
        alert("Please enter a task.");
        return; // Prevent adding empty tasks
    }


    const clone = task.cloneNode(true);
    const cloneText = clone.querySelector(`.text1`);
    cloneText.innerHTML = input.value;
    
    
    const cloneTrashBtn = clone.querySelector(`.trash`); // clone trash button
    
    cloneTrashBtn.addEventListener("click", () => {
        clone.remove();
    });  // create remove option for new elements

    const cloneEditBtn = clone.querySelector(`.fa-pencil`); // clone trash button
    
    cloneEditBtn.addEventListener("click",()=>{
       
        const textElement = cloneEditBtn.parentElement.parentElement.querySelector(`.text1`);



        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = textElement.innerHTML;

        textElement.replaceWith(editInput);
        editInput.focus();

        editInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                const newTextElement = document.createElement("div");
                newTextElement.classList.add("text1");
                newTextElement.innerHTML = editInput.value;

                editInput.replaceWith(newTextElement);
            }
        });


    })
    
    
    list.insertBefore(clone,list.firstChild);
    input.value = "";

});