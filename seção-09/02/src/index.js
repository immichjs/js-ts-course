import { name as name2, lastName, age, sum, Person } from './module1'
import * as myModule from './module1'

const name = 'Laura'

console.log(name, name2, lastName, age)
console.log(sum(2, 50))

const Mich = new Person('Michel', 20)
console.log(Mich)

console.log(myModule)