function saudacao (nome) {
    return `Bom dia ${nome}`
}

const hello = saudacao('Michel')
console.log(hello)

function somaDoisNumeros (x = 0, y = 0) {
    const result = x + y
    return result
}

console.log(somaDoisNumeros(2, 3))

const result = somaDoisNumeros(5, 2)

console.log(somaDoisNumeros())

const raiz = function (n) {
    return n ** 0.5
}

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

const sqrt = n => n ** 0.5

console.log(sqrt(9))
console.log(sqrt(16))
console.log(sqrt(25))