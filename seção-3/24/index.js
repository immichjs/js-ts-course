try {
  console.log(test)
} catch (err) {
  console.log('Não existe')
  console.log(err.message)
}

function sumNumbers(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y devem ser números')
  }

  return x + y
}

try {
  const sum = sumNumbers('1', 2)
  console.log(sum)
} catch (error) {
  console.log(`[Error]: ${error.message}`)
}