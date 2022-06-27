let names = ['Mich', 'John', 'Jane']
names[2] = 'João'
delete names[2]
console.log(names)

names = new Array(...names.reverse())
console.log(names)

const newArray = [...names]
newArray.pop()
console.log(newArray)

newArray.push('Maria')
console.log(newArray)

const removedName = newArray.shift()
console.log(newArray, removedName)

newArray.unshift('Laura')
console.log(newArray)

const newArrayItems = newArray.slice(1, 3)
console.log(newArrayItems)

let user = 'Michel França de Assis'
const userArray = user.split(' ')

console.log(user, userArray)

user = userArray.reverse().join(' ')
console.log(user)