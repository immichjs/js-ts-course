const fizzBuzz = (n) => {
  if (typeof n !== 'number') return n
  if (n % 5 === 0 && n % 3 === 0) return 'FizzBuzz'
  if (n % 5 === 0) return 'Buzz'
  if (n % 3 === 0) return 'Fizz'
  return n
}

for (let i = 0; i < 100; i++) {
  console.log(i, fizzBuzz(i))
}