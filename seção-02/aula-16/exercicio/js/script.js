const number = Number(prompt('Digite um numero:'))

const yourNumber = document.querySelectorAll('.number')
const isInt = document.querySelector('.is-int')
const isNan = document.querySelector('.is-nan')
const floor = document.querySelector('.floor')
const ceil = document.querySelector('.ceil')
const fixed = document.querySelector('.fixed')

for (let i in yourNumber) yourNumber[i].textContent = number
isInt.textContent = Number.isInteger(number)

isNan.textContent = Number.isNaN(number)

floor.textContent = Math.floor(number)
ceil.textContent = Math.ceil(number)

fixed.textContent = number.toFixed(2)


const sqrt = document.querySelector('.raiz')

sqrt.textContent = number ** 0.5