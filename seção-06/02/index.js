function Product (name, price, stock) {
    Object.defineProperty(this, 'stock', {
        writable: false,
        enumerable: true,
        value: stock,
        configurable: false
    })

    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name,
            writable: true,
            configurable: false
        },
        price: {
            enumerable: true,
            value: price,
            writable: false,
            configurable: false
        }
    })
}
const notebook = new Product('Notebook', 2000, 1)

console.log(Object.keys(notebook))

for (let key in notebook) {
    console.log(key)
}