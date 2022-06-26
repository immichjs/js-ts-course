const pessoa1 = {
    nome: 'Michel',
    sobrenome: 'Miranda',
    idade: 19,

    fala() {
        console.log(`${this.idade} é minha idade atual`)
    },

    incrementaIdade() {
        ++this.idade
    }
}

console.log(pessoa1.nome)

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}

const pessoa2 = criaPessoa('Luiz', 'Miranda', 25)
const pessoa3 = criaPessoa('Maria', 'Olivia', 16)
const pessoa4 = criaPessoa('Jean', 'Otávio', 23)

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()