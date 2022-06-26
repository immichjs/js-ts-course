const nome = 'Luiz Otávio'
const sobrenome = ' Miranda'
const idade = 30
const peso = 84
const alturaEmM = 1.80
let indiceMassaCorporea = peso / (alturaEmM * alturaEmM) // Peso / (altura * altura)
let nascimento = new Date().getFullYear() - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos`)
console.log(`Tem ${alturaEmM} de altura e seu IMC é de: ${indiceMassaCorporea}`)
console.log(`${nome} nasceu em ${nascimento}`)