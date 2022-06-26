function Person(name, lastName, height, weight) {
  this.name = name
  this.lastName = lastName
  this.height = height
  this.weight = weight

  this.imc = function () {
    return this.weight / (this.height ** 2)
  }
}

const p1 = new Person('Mich', 'França', 1.65, 60)

console.log(p1)
console.log(p1.imc())