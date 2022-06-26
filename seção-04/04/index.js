function returnFunction(name) {
  return function () {
    return name
  }
}

const function1 = returnFunction('Mich')
const function2 = returnFunction('Laura')

console.log(function1(), function2())