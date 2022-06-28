function Product (name, price) {
    this.name = name
    this.price = price
}

Product.prototype.discount = function (quantity) {
    this.price -= quantity
}

Product.prototype.increase = function (quantity) {
    this.price += quantity
}

function Camisa (name, price, color) {
    Product.call(this, name, price)
    this.color = color
}
Camisa.prototype = Object.create(Product.prototype)
Camisa.prototype.constructor = Camisa

const dual = new Product('Notebook', 2000)
const camiseta = new Camisa('Regata', 7.5, 'Preta')
camiseta.increase(30)
console.log(dual)
console.log(camiseta)

Camisa.increase =  function (percent) {
    this.price = this.price + (this.price * (percent / 100))
}

camiseta.increase(100)
console.log(camiseta)

function Caneca (name, price, material, stock) {
    Product.call(this, name, price)
    this.material = material
    this.stock = stock
}

Caneca.prototype = Object.create(Product.prototype)
Caneca.prototype.constructor = Caneca

const caneca = new Caneca('Caneca de vidro', 10, 'Vidro', 1)
caneca.stock++
console.log(caneca)