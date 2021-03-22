let num1 = 9.5423

let floor = Math.floor(num1) // Arredonda pra baixo
let ceil = Math.ceil(num1) // Arredonda pra cima
let round = Math.round(num1)

console.log(floor, ceil, round) // Arredonda automaticamente de acordo com a posição do ponto flutuante, < 5 floor, > 5 ceil

console.log(Math.max(1, 2, 3, 4, 5, 7, 8, 9 , 1000, 10, 11)) // Retorna o maior numéro dos parâmetros
console.log(Math.min(1, 2, 3, 4, 5, -7, 8, -9 , 1000, 10, 11)) // Retorna o menor numéro dos parâmetros
console.log(Math.random()) // Retorna numero aleatório entre 0 e 1

const random = Math.random() * (10 - 5) + 5
console.log(random)

console.log(Math.PI) // PI


console.log(Math.pow(2, 10)) // Potenciação
console.log(2 ** 10)

num1 = 9
console.log(num1 ** (1/2))
console.log(num1 ** 0.5)

console.log(100 / 0) // Infinity === true