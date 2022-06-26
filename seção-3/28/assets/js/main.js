const inputTask = document.querySelector('.task')
const buttonAdd = document.querySelector('.btn-add')
const list = document.querySelector('.list')

const createListItem = () => document.createElement('li')
const clearInput = () => (inputTask.value = '', inputTask.focus())

const saveTasks = () => {
  const listItems = document.querySelectorAll('li')
  const listTask = []

  for (let task of listItems) {
    let textTask = task.innerText
    textTask = textTask.replace('×', '').trim()
    listTask.push(textTask)
  }

  const convertToJSON = JSON.stringify(listTask)
  localStorage.setItem('tasks', convertToJSON)
}

const addSavedTasks = () => {
  const tasks = localStorage.getItem('tasks')
  const listTasks = JSON.parse(tasks)

  for (let task of listTasks) {
    createTask(task)
  }
}

const createRemoveButton = (listItem) => {
  listItem.innerHTML += ' '
  const removeButton = document.createElement('button')
  removeButton.innerHTML = '×'
  removeButton.setAttribute('class', 'remove')
  listItem.appendChild(removeButton)
  saveTasks()
}

const createTask = (text) => {
  const listItem = createListItem()
  listItem.innerHTML = text
  list.appendChild(listItem)
  createRemoveButton(listItem)
  saveTasks()
}

const checkAndExecCreation = () => {
  if (!inputTask.value) return
  createTask(inputTask.value)
  clearInput()
}

inputTask.addEventListener('keypress', ({ keyCode }) => {
  if (keyCode === 13) checkAndExecCreation()
})

buttonAdd.addEventListener('click', checkAndExecCreation)

document.addEventListener('click', ({ target }) => {
  if (target.classList.contains('remove')) {
    target.parentElement.remove()
    saveTasks()
  }
})

addSavedTasks()