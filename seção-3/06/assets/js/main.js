const peso = Number(document.querySelector('#input-weight')).value
const altura = Number(document.querySelector('#input-height')).value
const form = document.querySelector('#form')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const rawWeight = event.target.querySelector('#input-weight').value
  const rawHeight = event.target.querySelector('#input-height').value
  const weight = Number(rawWeight)
  const height = Number(rawHeight)


  if (!weight) {
    setResult('Peso inválido', false)
    return
  }

  if (!height) {
    setResult('Altura inválido', false)
    return
  }

  const imc = getImc(weight, height)
  const levelImc = getImcLevel(imc)

  const message = `Seu IMC é: ${imc} (${levelImc})`

  setResult(message, true)
})

function createParagraph() {
  const p = document.createElement('p')
  return p
}

function setResult(message, isValid) {
  const result = document.querySelector('#result')
  result.innerHTML = ''

  const p = createParagraph()
  if (isValid) {
    p.classList.add('paragrafo-resultado')
  } else {
    p.classList.add('bad')
  }

  p.innerHTML = message
  result.appendChild(p)
}

function getImc(weight, height) {
  const imc = weight / height ** 2
  return imc.toFixed(2)
}

function getImcLevel(imc) {
  const level = [
    'Abaixo do peso',
    'Peso normal',
    'sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3'
  ]

  if (imc >= 39.9) return level[5]
  if (imc >= 34.9) return level[4]
  if (imc >= 29.9) return level[3]
  if (imc >= 24.9) return level[2]
  if (imc >= 18.5) return level[1]
  if (imc < 18.5) return level[0]
}