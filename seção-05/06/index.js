const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const sumAllNumbers = numbers.reduce((acc, next) => {
  if (next % 2 !== 0) acc += next
  return acc
}, 0)

console.log(sumAllNumbers)

const people = [
  { name: 'Max', age: 28 },
  { name: 'Mich', age: 20 },
  { name: 'Jakefos', age: 55 },
  { name: 'Thenat', age: 33 },
  { name: 'Janine', age: 43 },
]

const oldestPerson = people.reduce((acc, next) => {
  if (acc.age > next.age) return acc
  return next
})

console.log(oldestPerson)