const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const doubleNumbers = numbers.map(number => number * 2)
console.log(doubleNumbers)

const people = [
  { name: 'Max', age: 28 },
  { name: 'Mich', age: 20 },
  { name: 'Jakefos', age: 55 },
  { name: 'Thenat', age: 33 },
  { name: 'Janine', age: 5 },
]

const names = people.map(person => person.name)
console.log(names)

const withIds = people.map((person, index) => ({ ...person, id: index }))
console.log(withIds)