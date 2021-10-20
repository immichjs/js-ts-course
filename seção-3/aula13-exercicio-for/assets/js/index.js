const elementos = [
  { tag: 'p', text: 'Frase 1' },
  { tag: 'div', text: 'Frase 2' },
  { tag: 'footer', text: 'Frase 3' },
  { tag: 'section', text: 'Frase 4' },
]

const app = document.querySelector('#app')

for (let i = 0; i < elementos.length; i ++) {
  const { tag, text } = elementos[i]
  app.innerHTML += `<${tag}>${text}</${tag}`
}
