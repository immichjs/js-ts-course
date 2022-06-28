function CPF (cpf) {
    Object.defineProperty(this, 'clearCPF', {
        enumerable: true,
        get: function () {
            return cpf.replace(/[^\d]+/g, '')
        }
    })
}

CPF.prototype.validate = function () {
    if (typeof this.clearCPF === 'undefined') return false
    if (this.clearCPF.length !== 11) return false
    if (this.isSequece()) return false

    const parcial = this.clearCPF.slice(0, -2)
    const firstDigit = this.createDigit(parcial)
    const secondDigit = this.createDigit(parcial + firstDigit)
    
    const generatedCPF = parcial + firstDigit + secondDigit
    return generatedCPF === this.clearCPF
}

CPF.prototype.createDigit = function (parcial) {
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

CPF.prototype.isSequece = function () {
    const sequence = this.clearCPF[0].repeat(this.clearCPF.length)
    return sequence === this.clearCPF
}

const cpf = new CPF('325.093.148-90')
console.log(cpf.validate())

if (cpf.validate()) {
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}