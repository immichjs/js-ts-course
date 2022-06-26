const person = {
  name: 'Mich',
  lastName: 'França',
  age: 20,
  address: {
    street: 'Av Brasil',
    number: 236
  }
}

const { name: n = '', lastName = '', address: { street: r = '', number }, ...rest } = person

console.log(n, lastName, rest, r, number)