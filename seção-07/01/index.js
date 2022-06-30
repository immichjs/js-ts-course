class Person {
  constructor (name, lastName) {
    this.name = name
    this.lastName = lastName
  } 

  saying () {
    console.log(`${this.name} está falando`)
  }
}

const p1 = new Person('Mich', 'França')
p1.saying()
console.log(p1)

function Person2(name, lastName) {
  this.name = name
  this.lastName = lastName
}

Person2.prototype.saying = function () {
  console.log(`${this.name} está falando`)
}

const p2 = new Person2('Laura', 'Armendane')
console.log(p2)