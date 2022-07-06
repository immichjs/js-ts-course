import generatePassword from './generators.module.js'

const senhaGerada = document.querySelector('.senha-gerada')
const quantity = document.querySelector('.qtd')
const chkUppercase = document.querySelector('.chk-maiusculas')
const chkLowercase = document.querySelector('.chk-minusculas')
const chkNumbers = document.querySelector('.chk-numeros')
const chkSymbols = document.querySelector('.chk-simbolos')
const button = document.querySelector('.gerar-senha')

export default () => {
  button.addEventListener('click', () => {
    senhaGerada.innerHTML = gerar()
  })
}

function gerar() {
  const senha = generatePassword({
    quantity: quantity.value,
    uppercase: chkUppercase.checked,
    lowercase: chkLowercase.checked,
    numbers: chkNumbers.checked,
    symbols: chkSymbols.checked
  })

  return senha || 'Nada selecionado'
}