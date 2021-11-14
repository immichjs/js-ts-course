const _velocity = Symbol('velocity')

class Carro {
  constructor (name) {
    this.name = name
    this[_velocity] = 0
  }

  set velocity (value) {
    if (typeof value !== 'number') return
    if (value >= 100 || value <= 0) return 
    this[_velocity] = value
  }

  get velocity () {
    return this[_velocity]
  }

  boost () {
    if (this[_velocity] >= 100) return
    this[_velocity]++
  }

  brake () {
    if (this[_velocity] <= 0) return
    this[_velocity]--
  }
}

const Fusca = new Carro('Fusca')
console.log(Fusca.velocity = 99)
