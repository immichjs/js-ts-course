function* generated1() {
  yield '1'
  yield '2'
  yield '3'
}

const g1 = generated1()
for (let i of g1) {
  console.log(i)
}

function* generated2() {
  let i = 0

  while (true) {
    yield i
    i++
  }
}

const g2 = generated2()
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)

function* generated3() {
  yield 0
  yield 1
  yield 2
}

function* generated4() {
  yield* generated3()
  yield 4
  yield 5
  yield 6
}

const g4 = generated4()
for (let i of g4) {
  console.log(i)
}

function* generated5() {
  yield function () {
    console.log('Vim do y1')
  }

  yield function () {
    console.log('Vim do y2')
  }

  return function () {
    console.log('Vim do return')
  }
}

const g5 = generated5()
const func1 = g5.next().value
const func2 = g5.next().value
const func3 = g5.next().value

func1()
func2()
func3()