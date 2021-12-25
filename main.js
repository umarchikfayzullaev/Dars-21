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
    tbodyElement.textContent = ""
    for(let item in array) {
        const newTrElement = document.createElement("tr");
        if(data [item] ["isDone"]) {
            newTrElement.classList.add("table-success")
        }
        const newTrElement = document.createElement("tr");
        const newTodoNameElement = document.createElement("td");
        newTodoNameElement.textContent = data[item] ["name"];
        const newButtonWrapperTdElement = document.createElement("td");
        const newDoneButtonElement = document.createElement("button");
        const newRemoveButtonElement = document.createElement("button");

        newDoneButtonElement.classList.add('btn', 'btn-success');
        newDoneButtonElement.textContent = "Done"
        newRemoveButtonElement.classList.add('btn', 'btn-danger');
        newRemoveButtonElement.textContent = "Remove"

        newButtonWrapperTdElement.appendChild(newDoneButtonElement)
        newButtonWrapperTdElement.appendChild(newRemoveButtonElement)

        newTrElement.appendChild(newTodoNameElement)
        newTrElement.appendChild(newButtonWrapperTdElement)

        tbodyElement.appendChild(newTrElement)
    }
}