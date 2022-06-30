const _velocity = Symbol()

class Car {
  constructor (name) {
    this.name = name
    this[_velocity] = 0
  }

  get velocity () {
    return this[_velocity]
  }

  set velocity (value) {
    if (typeof value !== 'number') return
    if (value >= 100 || value <= 0) return
    this[_velocity] = value
  }

  speedUp () {
    if (this.velocity >= 100) return
    this[_velocity]++
  }

  break () {
    if (this.velocity <= 0) return
    this[_velocity]--
  }
}

const c1 = new Car('Fusca')

for (let i = 0; i <= 200; i++) {
  c1.speedUp()
}

c1.velocity = 200
console.log(c1)

class Person {
  constructor (name, lastName) {
    this.name = name
    this.lastName = lastName
  }

  get fullName () {
    return `${this.name} ${this.lastName}`
  }

  set fullName (value) {
    value = value.split(' ')
    this.name = value.shift()
    this.lastName = value.join()
  }
}