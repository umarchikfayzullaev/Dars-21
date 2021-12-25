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
        const newTrElement = document.createElement("tr");
        const newTodoNameElement = document.createElement("td");
        const newButtonWrapperTdElement = document.createElement("td");
        const newDoneButtonElement = document.createElement("button");
        const newRemoveButtonElement = document.createElement("button");

        
    }
}