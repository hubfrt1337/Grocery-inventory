const btn = document.querySelector('.add')
const formContainer = document.querySelector(".form-container")
const formAdd = document.querySelector(".form-add")

btn.addEventListener("click", () => {
    formContainer.style.display = "flex"
})

formAdd.addEventListener('submit', () => {
    formContainer.style.display = 'none';
})

window.addEventListener("click", (e) => {
    if(e.target === formContainer){
        formContainer.style.display = 'none';
    }
    
})