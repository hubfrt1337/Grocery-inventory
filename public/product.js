const btn = document.querySelector(".add-js")
const btnDelete = document.querySelectorAll(".trash-image")
const formContainer = document.querySelector(".form-container")
const formAdd = document.querySelector(".form-add-js")
const deleteContainer = document.querySelector(".delete-container")

// POST form 2x
btn.addEventListener("click", () => {
    formContainer.style.display = "flex"
})

formContainer.addEventListener('submit', () => {
    formContainer.style.display = 'none';
})

// DELETE form 2x
btnDelete.forEach(btn => {
    btn.addEventListener("click", () => {
    value = btn.parentElement.parentElement.querySelector("input[name='productId']").value;
    // get the current quantity to set as placeholder
    //amount = btn.parentElement.parentElement.querySelector("input[name='amount']").value;
    //deleteContainer.querySelector("input[name='amount']").value = amount;
    //deleteContainer.querySelector("input[name='amount']").placeholder = amount;
    deleteContainer.querySelector("input[name='productId']").value = value;
    deleteContainer.style.display = 'flex';
})
})

deleteContainer.addEventListener("submit", () => {
    deleteContainer.style.display = 'none'
})

window.addEventListener("click", (e) => {
    if (e.target === formContainer) {
        formContainer.style.display = 'none';
    }
    if(e.target === deleteContainer){
        deleteContainer.style.display = 'none'
    }
})

let value;
