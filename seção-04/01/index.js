sayHi()

function sayHi() {
  console.log('Hi')
}

const sayMessage = function (message) {
  console.log(message)
}
sayMessage('Hello World')

const sayHello = () => console.log('Hello')
sayHello()

const imData = () => console.log("I'm data")

function executeFunction(callback) {
  callback()
}
executeFunction(imData)

const person = {
  name: 'John',
  say() {
    console.log(`Hi, my name is ${this.name}`)
  }
}
person.say()