(function meuEscopo () {
    const form = document.querySelector('.form')
    const result = document.querySelector('.resultado')

    const pessoas = []

    const addPeople = (nome, sobrenome, peso, altura) => {
        return { nome, sobrenome, peso, altura }
    }

    const reciveFormEvent = e => {
        e.preventDefault()
        
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push(addPeople(nome.value, sobrenome.value, peso.value, altura.value))

        result.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', reciveFormEvent)
})()