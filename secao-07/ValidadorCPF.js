class checkCPF {
  constructor (cpf) {
    Object.defineProperty(this, 'cleanCPF', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpf.replace(/\D+/g, '')
    })
  }

  itsSequel () {
    return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF
  }
  
  generateNewCPF () {
    const cpfWithoutDigits = this.cleanCPF.slice(0, -2)
    const digit = checkCPF.generateDigit(cpfWithoutDigits)
    const digit2 = checkCPF.generateDigit(cpfWithoutDigits + digit)
    this.newCPF = cpfWithoutDigits + digit + digit2
  }

  static generateDigit (cpfWithoutDigits) {
    let total = 0
    let reverse = cpfWithoutDigits.length + 1

    for (let numericString of cpfWithoutDigits) {
      total += reverse * Number(numericString)
      reverse--
    }

    const digit = 11 - (total % 11)
    return digit <= 9 ? String(digit) : '0'
  }

  validate () {
    if (!this.cleanCPF) return false
    if (typeof cleanCPF !== 'string') return false
    if (this.cleanCPF.length !== 11) return false
    if (this.itsSequel()) return false

    this.generateNewCPF()
    
    return this.newCPF === this.cleanCPF
  }
}

const validateCPF = new checkCPF('070.987.720-03')

if (validateCPF.validate()) {
  console.log('CPF válido.')
} else {
  console.log('CPF inválido.')
}
