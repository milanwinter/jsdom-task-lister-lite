document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.querySelector("form")
    form.addEventListener("submit",addTodo)
    dropdown();
    userField();

});

function addTodo(e) {
  e.preventDefault()
  const task = document.querySelector("#new-task-description")
  const ul = document.querySelector("#tasks")
  const li = document.createElement("li")
  const duration = document.querySelector("#userInput")
  const span = document.createElement("span")
  span.innerText = task.value + "- " + duration.value + " "
  li.appendChild(span)
  const dropdown = document.querySelector("#dropdown")
  switch (dropdown.value) {
    case "high": 
      li.style.color = "red";
      break;
    case "medium":
      li.style.color = "yellow";
      break;
    case "low":
      li.style.color = "green";
    }
  span.setAttribute("contenteditable","true")
  const button = document.createElement("button")
  button.addEventListener("click",(e)=> e.target.parentNode.remove())
  button.innerText = "Delete"
  li.appendChild(button)
  ul.appendChild(li)
  duration.value = ""
  task.value = ""
}

function dropdown() {
  const input = document.querySelector("#new-task-description")
  const select = document.createElement("select")
  select.id = "dropdown"
  select.innerHTML = `
  <option value = "high">High</option>
  <option value = "medium">Medium</option>
  <option value = "low">Low</option>`
  input.insertAdjacentElement('afterEnd',select)
}

function userField() {
  const input = document.querySelector("#new-task-description")
  const field = document.createElement("input")
  const label = document.createElement("label")
  label.innerText = "Duration"
  field.id = "userInput"
  field.setAttribute("type","text")
  input.insertAdjacentElement('afterend', label)
  label.insertAdjacentElement('afterend',field)

}
