const names = ['Mich', 'John', 'Jane', 'Daffy', 'Nagato']

// [].pop()
let removed = names.splice(-1, 1)
console.log(names, removed)

// [].shift()
removed = names.splice(0, 1)
console.log(names, removed)

// [].push()
removed = names.splice(names.length, 0, 'Mich', 'Otávio', 'Miranda')
console.log(names, removed)

// [].unshift()
removed = names.splice(0, 0, 'Mich', 'Otávio', 'Miranda')
console.log(names, removed)
