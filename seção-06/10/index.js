const say = {
    say() {
        console.log('Hello')
    },
}

const walk = {
    walk() {
        console.log('Walking')
    }
}

function createPerson(name, age) {
    const prototypePerson = {
        ...say,
        ...walk
    }

    return Object.create(prototypePerson, {
        name: { enumerable: true, value: name },
        age: { enumerable: true, value: 20 }
    })
}

const person = createPerson('John', 30)
const anotherPerson = createPerson('Laura', 19)
console.log(person)
console.log(anotherPerson)