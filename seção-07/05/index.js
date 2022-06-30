class CPF {
  constructor (cpf) {
    Object.defineProperty(this, 'clearCPF', {
      enumerable: true,
      get: function () {
          return cpf.replace(/[^\d]+/g, '')
      }
    })
  }

  validate () {
    if (typeof this.clearCPF === 'undefined') return false
    if (this.clearCPF.length !== 11) return false
    if (this.isSequece()) return false
  
    const parcial = this.clearCPF.slice(0, -2)
    const firstDigit = CPF.createDigit(parcial)
    const secondDigit = CPF.createDigit(parcial + firstDigit)
  
    const generatedCPF = parcial + firstDigit + secondDigit
    return generatedCPF === this.clearCPF
  }

  static createDigit (parcial) {
    const cpfArray = Array.from(parcial)
  
    let regressive = cpfArray.length + 1
    const total = cpfArray.reduce((acc, curr) => {
        acc += (regressive * Number(curr))
        regressive--
        return acc
    }, 0)
  
    const digit = 11 - (total % 11)
    return digit > 9 ? '0' : String(digit)
  }

  isSequece () {
    return this.clearCPF.charAt(0).repeat(11) === this.clearCPF
  }
}

const cpf = new CPF('325.093.148-90')
console.log(cpf.validate())

if (cpf.validate()) {
  console.log('CPF válido')
} else {
  console.log('CPF inválido')
} 
const cpfInvalid = new CPF('999.999.999-99')
console.log(cpfInvalid.validate()) 

if (cpfInvalid.validate()) {
  console.log('CPF válido')
} else {
  console.log('CPF inválido')
} 