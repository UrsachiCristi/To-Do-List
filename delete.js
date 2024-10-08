const trashBtns = document.querySelectorAll(`.trash`);


trashBtns.forEach(element => {
    element.addEventListener("click",()=>{
        element.parentElement.remove();
    })
});