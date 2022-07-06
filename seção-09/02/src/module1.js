export const name = 'Mich'
const lastName = 'França'
const age = 20

export function sum (x, y) {
  return x + y
}

export class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
}

export {
  lastName,
  age as default,
}
