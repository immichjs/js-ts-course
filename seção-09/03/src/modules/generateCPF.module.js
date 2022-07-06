import validateCPF from './validateCPF.module'

export default class GenerateCPF {
  randomize (min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min)) + min)
  }

  format(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    )
  }

  generateNewCPF() {
    const cpfWithoutDigits = this.randomize()
    const firstDigit = validateCPF.createDigit(cpfWithoutDigits)
    const secondDigit = validateCPF.createDigit(cpfWithoutDigits + firstDigit)
    const newCPF = cpfWithoutDigits + firstDigit + secondDigit
    return this.format(newCPF)
  }
}