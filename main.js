
const formElement = document.querySelector('.form');
const todoNameInputElement = document.querySelector(".todo-name")
const tbodyElement = document.querySelector("#tbody");

const data  = JSON.parse(localStorage.getItem("data"))  || []

renderArray(data)

formElement.addEventListener("submit", event => {
    event.preventDefault();

    if (todoNameInputElement.value.length > 0) {
        data.push({
            name: todoNameInputElement.value,
            isDone: false
        })

        renderArray(data)
    }
})

function renderArray(array) {
    localStorage.setItem("data", JSON.stringify(array))
    tbodyElement.textContent = ""
    for(let item in array) {
        const newTrElement = document.createElement('tr');
        if(data [item] ["isDone"]) {
            newTrElement.classList.add("table-success")
        }
        const newTodoNameElement = document.createElement('td');
        newTodoNameElement.textContent = data[item] ["name"]
        const newButtonWrapperTdElement = document.createElement('td');
        const newDoneButtonElement = document.createElement('button')
        const newRemoveButtonElement = document.createElement('button')

        newDoneButtonElement.classList.add('btn', 'btn-success')
        newDoneButtonElement.textContent = "Done"
        newRemoveButtonElement.classList.add('btn', 'btn-danger')
        newRemoveButtonElement.textContent = "Remove"

        newButtonWrapperTdElement.appendChild(newDoneButtonElement)
        newButtonWrapperTdElement.appendChild(newRemoveButtonElement)

        newTrElement.appendChild(newTodoNameElement)
        newTrElement.appendChild(newButtonWrapperTdElement)

        tbodyElement.appendChild(newTrElement)
    }

    formElement.reset()
}