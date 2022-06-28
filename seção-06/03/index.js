function Product (name, price, stock) {
    let _stock = stock
    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name,
            configurable: false
        },
        price: {
            value: price,
            enumerable: true,
            configurable: false
        }
    })
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: function () {
            return _stock
        },
        set: function(value) {
            if (typeof value !== 'number') return
            _stock = value
        }
    })

}
const notebook = new Product('Notebook', 2000, 1)
console.log(notebook)
notebook.stock = 333
console.log(notebook.stock)