
let umaString = "Um \"texto\""
umaString = "Um texto"

console.log(umaString[4])
console.log(umaString.charAt(6))
console.log(umaString.concat(' ', 'em', ' ', ' um', ' lindo dia'))
console.log(umaString + ' em um lindo dia')
console.log(`${umaString} em um lindo dia`)
console.log(umaString.indexOf('texto'))
console.log(umaString.indexOf('um', 3))
console.log(umaString.lastIndexOf('o'))

console.log(umaString.replace('Um', 'Outra'))

umaString = 'O rato roeu a roupa do rei de roma.'
console.log(umaString.replace(/r/g, '#'))

console.log(umaString.length)
console.log(umaString.slice(2, 6))
console.log(umaString.length - 5)
console.log(umaString.slice(29))
console.log(umaString.slice(-5, -1))

console.log(umaString.substring(umaString.length - 5, umaString.length - 1))

console.log(umaString.split(' '))
console.log(umaString.split('r'))
console.log(umaString.split(' ', 3))

console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())