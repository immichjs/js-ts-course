const person = {
    name: 'Mich',
    age: 20
}
console.log(person)

const anotherPerson = {
    address: {
        street: 'Av. Brasil',
        number: 236,
        city: 'Sorocaba',
        state: 'SP'
    }
}
console.log(anotherPerson)

anotherPerson.name = 'Laura'
console.log(person === anotherPerson)

const anotherPerson2 = Object.assign({}, person, anotherPerson)
anotherPerson2.name = 'Sabine'
console.log(anotherPerson2)

console.log(Object.getOwnPropertyDescriptors(person, 'name', 'age'))
console.log(Object.values(anotherPerson))

for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`)
}