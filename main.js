const formElement = document.querySelector('.form')
const todoNameElement = document.querySelector('.todo-name')
const tbodyElement = document.querySelector("#tbody")

formElement.addEventListener("submit", event => {
    event.preventDefault();
    
    if (todoNameInputElement.value.length > 0) {
        data.push({
            name: todoNameElement.value,
            isDone: false
        })
        renderArray(data)
    }
})

function renderArray(array) {
    for(let item in array) {
        
    }
}