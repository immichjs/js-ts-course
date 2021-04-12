const dateHTML = document.querySelector('.date')

const date = new Date()
dateHTML.innerHTML = date.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })
