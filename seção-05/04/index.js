const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const numbersFiltered = numbers.filter((element) => element > 18)
console.log(numbersFiltered.sort())

const people = [
  { name: 'Max', age: 28 },
  { name: 'Mich', age: 20 },
  { name: 'Jakefos', age: 55 },
  { name: 'Thenat', age: 33 },
  { name: 'Janine', age: 5 },
]

const personWithLargeName = people.filter((person) => person.name.length > 4)
console.log(people, personWithLargeName)

const personWithOldAge = people.filter((person) => person.age > 50)
console.log(personWithOldAge)

const nameStartWithJ = people.filter((person) => person.name.toLowerCase().startsWith('j'))
console.log(nameStartWithJ)