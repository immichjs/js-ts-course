const randomize = (min = 48, max = 57) => Math.floor(Math.random() * (max - min)) + min
const randomizeUppercaseLetters = () => String.fromCharCode(randomize(65, 91))
const randomizeLowercaseLetters = () => String.fromCharCode(randomize(97, 123))
const symbols = ',<.>/?;:[]{}\\|`~!@#$%^&*()_+-='
const randomizeSymbols = () => symbols[randomize(0, symbols.length)]

function generatePassword({ quantity, uppercase, lowercase, numbers, symbols }) {
  const passwordArray = []
  quantity = Number(quantity)

  for (let i = 0; i <= quantity; i++) {
    uppercase && passwordArray.push(randomizeUppercaseLetters())
    lowercase && passwordArray.push(randomizeLowercaseLetters())
    numbers && passwordArray.push(randomize(48, 57))
    symbols && passwordArray.push(randomizeSymbols())
  }

  return passwordArray.join('').slice(0, quantity)
}

export default generatePassword