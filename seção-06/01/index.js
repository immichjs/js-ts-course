const person = {
    name: 'Mich',
    lastName: 'França'
}

console.log(person.name)
console.log(person['lastName'])

const person1 = new Object()

person1.name = 'Laura'
person1.lastName = 'Armendane'
console.log(person, person1)

delete person1.lastName
console.log(person1)

person.sayName = function () {
    console.log(`I'm ${this.name} ${this.lastName}`)
}
person.sayName()

person.age = 20
person.getBirthDate = function () {
    const date = new Date()
    return date.getFullYear() - this.age
}

console.log(person.getBirthDate())

for (let key in person) {
    console.log(person[key])
}

function createPerson (name, lastName) {
    return {
        name,
        lastName,
        get fullName() {
            return `${this.name} ${this.lastName}`
        }
    }
}

const Mich = createPerson('Mich', 'França')
console.log(Mich)

function Person (name, lastName) {
    this.name = name
    this.lastName = lastName

    Object.freeze(this)
}

const Laura = new Person('Laura', 'Armendane')
Laura.teste = 'Mich' // Not Work
console.log(Laura)