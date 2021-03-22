let num1 = 1
let num2 = 2.5

console.log(num1.toString + num2)
num1 = num1.toString()
console.log(num1.toString(2)) // Binário

num1 = 10.12192382193
console.log(num1.toFixed(4))

num1 = 10
console.log(Number.isInteger(num1))

let temp = num1 * '5'
console.log(Number.isNaN(temp))

// Padrão IEEE 752-2008
num1 = 0.7
num2 = 0.1

num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2

num1 = Number(num1.toFixed(2)) // Maneira correta de corrigir a imprecisão do js

console.log((num1 + num2))
console.log(Number.isInteger(num1))

num1 = 0.7
num2 = 0.1

num1 = ((num1 * 100) + (num2 * 100)) / 100 // Outra maneira de corrigir a imprecisão do js, mas que prejudica legibilidade

console.log(num1)