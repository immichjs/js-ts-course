const n1 = 5
const n2 = 10

console.log(n1 + n2) // +
console.log(n1 - n2) // -
console.log(n1 * n2) // *
console.log(n1 / n2) // /
console.log(n1 ** n2) // **
console.log(n1 % n2) // %

const n3 = 2
console.log((n1 + n2) * n3)

/**
 * Ordem de precedencia
 * ()
 * **
 * *
 * * / %
 * + -
 */

let contador = 1

// Increment
console.log(contador++)
console.log(contador)
++contador
console.log(contador)

// Decrement
console.log(contador--)
console.log(contador)
--contador
console.log(contador)

const step = 2
contador = 0
contador = contador + step
console.log(contador)

contador = 0
contador += 2
contador += 2
contador += 2
console.log(contador)

// NaN
const num1 = 10
const num2 = parseFloat('5.2') // parseInt(), parseFloat(), Number()

console.log(num1 + num2)
console.log(typeof num2)