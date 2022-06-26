let date = new Date(2022, 10, 20)
console.log(date.toString())

date = new Date('2022-11-23 20:20:59')
console.log(date.toString())

console.log('Dia: ', date.getDate())
console.log('Mês: ', date.getMonth())
console.log('Ano: ', date.getFullYear())
console.log('Hora: ', date.getHours())
console.log('Minutos: ', date.getMinutes())
console.log('Segundos: ', date.getSeconds())
console.log('Milisegundos: ', date.getMilliseconds())
console.log('Dia da semana: ', date.getDay())
console.log('Dia: ', date.getDay())
console.log(date.toString())

const leftZero = (number) => number <= 9 ? `0${number}` : number

function formatDate() {
  const day = leftZero(date.getDate())
  const month = leftZero(date.getMonth())
  const year = leftZero(date.getFullYear())
  const hour = leftZero(date.getHours())
  const min = leftZero(date.getMinutes())
  const sec = leftZero(date.getSeconds())

  return `${day}/${month}/${year} - ${hour}:${min}:${sec}`
}

date = new Date()
const dateBrazil = formatDate(date)

console.log(dateBrazil)