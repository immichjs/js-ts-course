function func() {
  let total = 0

  for (let item of arguments) {
    total += item
  }

  console.log(total)
}
func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function sum(a = 0, b = 0) {
  return a + b
}

const sumNumbers = sum(2, 3)
console.log(sumNumbers)

const person = {
  name: 'John',
  lastName: 'Doe',
  age: 20,
}

function destructuringParams({ name, lastName, age }) {
  console.log(`${name} ${lastName} ${age}`)
}
destructuringParams(person)

function sumAllNumbers(operation, accumulator, ...numbers) {
  for (let number of numbers) {
    if (operation === '+') accumulator += number
    if (operation === '-') accumulator -= number
    if (operation === '*') accumulator *= number
    if (operation === '/') accumulator /= number
  }

  console.log(accumulator)
}

sumAllNumbers('+', 9382, 3)