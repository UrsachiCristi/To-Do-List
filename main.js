const addButton = document.getElementById("plus");
const list = document.querySelector(`.list`);
const input = document.getElementById("add");
const radioBtns = document.querySelectorAll(`.radiobtn`);







radioBtns.forEach(element => {
    element.addEventListener("change",()=>{
        if (element.checked) {
            element.parentElement.querySelector(".text1").classList.add("cross");
        } else {
            element.parentElement.querySelector(".text1").classList.remove("cross");
        }
    });
});







