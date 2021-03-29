const form = document.querySelector('.container form')

const submit = form.querySelector('button')

const createParagraph = (className) => {
    const paragraph = document.createElement('p')
    return paragraph
}

const setResult = (message, isValid) => {
    const result = document.querySelector('.resultado')
    result.innerHTML = ''

    
    const paragraph = createParagraph()

    if (isValid) {
        paragraph.classList.add('valid')
    } else {
        paragraph.classList.add('invalid')
    }
    paragraph.innerHTML = message

    result.appendChild(paragraph)
}

const getImc = (weight, height) => {
    const imc = weight / height ** 2
    return imc.toFixed(2)
}

const getLevelImc = (imc) => {
    const level = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'
    ]

    if (imc > 39.9) return level[5]
    if (imc >= 34.9) return level[4]
    if (imc >= 29.9) return level[3]
    if (imc >= 24.9) return level[2]
    if (imc >= 18.9) return level[1]
    if (imc < 18.5) return level[0]
}

const submitForm = e => {
    e.preventDefault()
    const weightInput = e.target.querySelector('#peso')
    const heightInput = e.target.querySelector('#altura')
    
    const weight = Number(weightInput.value)
    const height = Number(heightInput.value)
    
    if (!weight) {
        setResult('Peso inválido', false)
        return
    }
    
    if (!height) {
        setResult('Altura inválido', false)
        return
    }

    const imc = getImc(weight, height)
    const levelImc = getLevelImc(imc)

    const message = `Seu IMC é ${imc} (${levelImc}) `

    setResult(message, true)
}

form.addEventListener('submit', submitForm)