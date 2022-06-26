const elements = [
  { tag: 'p', text: 'Frase 1' },
  { tag: 'div', text: 'Frase 2' },
  { tag: 'footer', text: 'Frase 3' },
  { tag: 'section', text: 'Frase 4' },
]

const container = document.querySelector('.container')
const div = document.createElement('div')

elements.forEach(({ tag, text }) => {
  const createElement = document.createElement(tag)
  createElement.innerHTML = text
  div.appendChild(createElement)
})

for (let i = 0; i < elements.length; i++) {
  const { tag, text } = elements[i]
  const createElement = document.createElement(tag)
  createElement.innerText = text
  div.appendChild(createElement)
}

container.appendChild(div)