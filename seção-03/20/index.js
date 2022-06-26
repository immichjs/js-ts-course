const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let number of numbers) {
  if (number === 2) {
    console.log('Jump number 2')
    continue
  }

  console.log(number)

  if (number === 7) {
    console.log('7 Found')
    break
  }
}
