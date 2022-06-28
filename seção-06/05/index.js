function Person (name, age) {
    this.name = name
    this.age = age

    // Object.defineProperty(this, 'birth', {
    //     enumerable: true,
    //     configurable: false,
    //     get: function() {
    //         return new Date().getFullYear() - this.age
    //     }
    // })

    this.birth = function () {
        return new Date().getFullYear() - this.age
    }
}

Person.prototype.sayHi = function () {
    console.log(`Hi, I'm ${this.name} (${this.age}y)`)
}

const Mich = new Person('Mich', 20)
const Laura = new Person('Laura', 19)
console.log(Mich, Laura)
console.log(Mich.birth())

Mich.sayHi()