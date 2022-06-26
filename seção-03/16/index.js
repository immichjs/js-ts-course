const fruits = ['Pêra', 'Mamão', 'Uva']
const person = {
  name: 'Mich',
  lastName: 'França',
  age: 20,
}

for (let i in fruits) {
  console.log(fruits[i])
}

for (let key in person) {
  console.log(key, person[key])
}