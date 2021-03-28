const expAndTrue = true && true
console.log (`true && true: ${expAndTrue}`)

const expAndFalse = true && true && false
console.log (`true && true && false: ${expAndFalse}`)

const expOrTrue = false || true
console.log(`false || true: ${expOrTrue}`)

const expOrFalse = false || false || false
console.log(`false || false || false: ${expOrFalse}`)

// Exemplo
const user = 'Mich'
const pass = '12345'

let login = user === 'Mich' && pass === '12345'
console.log(`Login: ${login}`)

login = !login
console.log(`Login: ${login}`)

console.log('Mich' && false && 'Mary') // Retorna o primeiro valor falso encontrado

// Retornam false
/**
 * false
 * 0
 * ''
 * ""
 * ``
 * null
 * undefined
 * NaN
 */
console.log('Mich' && '' && 'Mary') // Retornou a string vazia ('') por ser avaliada em false

function sayHi () {
    return 'Hi'
}

let goExec = false
console.log(goExec && sayHi())

goExec = true
console.log(goExec && sayHi())

console.log(0 || false || null || 'Mich' || true) // Retorna o primeiro verdadeiro encontrado

let color = null
let standardColor = color || 'Preto'

console.log(standardColor)

const a = 0
const b = null
const c = undefined
const d = false
const e = NaN

console.log(a || b || 'Mich' || c || d || e) // Retornou o primeiro valor true encontrado