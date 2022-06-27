const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const pairsNumbers = numbers
  .filter(number => number % 2 === 0)
  .map(number => number * 2)
  .reduce((acc, next) => acc + next, 0)

console.log(pairsNumbers)