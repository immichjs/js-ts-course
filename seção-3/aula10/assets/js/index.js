let a = 'A'
let b = 'B'
let c = 'C'

const letras = [b, c, a];
[a, b, c] = letras
console.log(a, b, c)


let numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]

const [one, two, ...rest] = numeros

console.log(one, two)
console.log(rest)

const [um, , tres, , cinco, , sete] = numeros

numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(numeros[1][2])

const [lista1, lista2, lista3] = numeros
console.log(lista3[2])
