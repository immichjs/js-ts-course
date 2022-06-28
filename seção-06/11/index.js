const persons = [
  { id: 2, name: "John" },
  { id: 3, name: "Mich" },
  { id: 1, name: "Laura" },
]

// const newPerson = {}

// for ( const person of persons) {
//   const { id } = person
//   newPerson[id] = { ...person }
// }

const newPerson = new Map()
for (const person of persons) {
  const { id } = person
  newPerson.set(id, { ...person })                          
}

console.log(newPerson.get(3))

for(const person of newPerson.keys()) {
  console.log(person)
}

for(const person of newPerson.values()) {
  console.log(person)
}

newPerson.delete(1)
console.log(newPerson)