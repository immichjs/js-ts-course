// fetch('pessoas.json')
//   .then(response => response.json())
//   .then(json => loadElementInPage(json))

axios('pessoas.json').then(response => loadElementInPage(response.data))

function loadElementInPage (json) {
  const table = document.createElement('table')
  for (let person of json) {
    const tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerHTML = person.nome
    tr.appendChild(td)
    
    let td2 = document.createElement('td')
    td2.innerHTML = person.idade
    tr.appendChild(td2)

    table.appendChild(tr)
  }

  const result = document.querySelector('.result')
  result.appendChild(table)
}