const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
}

// const { nome: name, sobrenome = '', endereco: { rua, numero = 0 }, endereco } = pessoa
const { nome, ...rest } = pessoa
console.log(nome, rest)
