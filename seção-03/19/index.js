let control = 0

const random = (min, max) => {
  const number = Math.random() * (max - min) + min
  return Math.round(number)
}

const min = 1
const max = 50
let rand = 10

while (rand !== 10) {
  rand = random(min, max)
  console.log(rand)
}

do {
  rand = random(min, max)
  console.log(rand)
} while (rand !== 10)