function sum(a, b) {
  return a + b
}
const sumNumbers = sum(2, 3)

console.log(sumNumbers)

const createPerson = (name, lastName, age) => {
  return {
    name,
    lastName,
    age
  }
}

const mich = createPerson('Mich', 'Doe', 20)
const laura = createPerson('Laura', 'Doe', 20)
console.log(mich, laura)

function createMultiply(multiply) {
  return function multiplyNumbers(n) {
    return n * multiply
  }
}
const double = createMultiply(2)
const triple = createMultiply(3)
const quad = createMultiply(4)

console.log(double(2), triple(2), quad(2))