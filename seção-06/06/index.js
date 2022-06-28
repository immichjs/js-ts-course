const objA = {
    keyA: 'A'
}
console.log(objA.__proto__ === Object.prototype)

const objB = {
    keyB: 'B'
}
Object.setPrototypeOf(objB, objA)
console.log(objB.keyB, objB.keyA)

function Product (name, price) {
    this.name = name
    this.price = price
}

Product.prototype.discount = function (percent) {
    this.price = this.price - (this.price * (percent / 100))
}

Product.prototype.increase = function (percent) {
    this.price = this.price + (this.price * (percent / 100))
}

const Caneta = new Product('Bic', 1.90)
// Caneta.discount(10)
Caneta.increase(20)
console.log(Caneta)

const notebook = {
    name: 'Macbook',
    price: 2199.90
}
Object.setPrototypeOf(notebook, Product.prototype)
console.log(notebook)
notebook.discount(10)
console.log(notebook)

const Camisa = Object.create(Product.prototype, {
    name: {
        enumerable: true,
        value: 'Camisa'
    },
    price: {
        enumerable: true,
        value: 79.9
    }
})
console.log(Camisa)
Camisa.increase(20)
console.log(Camisa)