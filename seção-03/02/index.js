console.log(true && true)
console.log(true && false)
console.log(true || false)
console.log(false || false)
console.log(!true)
console.log(!!'Hello world') // !! converts to boolean

const user = 'Mich'
const pass = '1234'

const validateLogin = user === 'Mich' && pass === '1234'
console.log(validateLogin)