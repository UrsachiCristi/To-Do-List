const editBtns = document.querySelectorAll(`.fa-pencil`);


editBtns.forEach(element => {
    element.addEventListener("click",()=>{
       
        const textElement = element.parentElement.parentElement.querySelector(`.text1`);



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
});
