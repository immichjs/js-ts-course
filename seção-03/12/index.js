let a = 'A';
let b = 'B';
let c = 'C';

const letters = ['A', 'B', 'C'];

[a, b, c] = letters

console.log(a, b, c)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [firstNumber, secondNumber, , fourNumber, ...rest] = numbers

console.log(firstNumber, secondNumber, fourNumber, rest)

numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [firstList, secondList, threeList] = numbers

console.log(numbers[1][2], firstList, secondList, threeList)