class Pessoa {
  constructor (personData) {
    const { firstName, lastName, age } = personData

    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  get fullName () {
    return `${this.firstName} ${this.lastName}`
  }

  set changeName (personData) {
    const { firstName, lastName } = personData
    this.firstName = firstName
    this.lastName = lastName
  }

  talk () {
    console.log('My name is', this.fullName)
  }
}

const Michel = new Pessoa({ firstName: 'Michel', lastName: 'Assis', age: 19 })
const Giovanna = new Pessoa({ firstName: 'Giovanna', lastName: 'Santi', age: 19 })

Michel.talk()
Giovanna.talk()

Michel.changeName = { firstName: 'John', lastName: 'Carter' }
Michel.talk()
