const threeHour = 60 * 60 * 3 * 10
const data = new Date(0 + threeHour)
console.log(data.toString())

const data2019 = new Date(2021, 3, 20, 15, 14, 27,999)
console.log(data2019.toString())

const dataString = new Date('2021-04-20 20:20:59.100')
console.log(dataString.toString())
console.log('Dia', dataString.getDate())
console.log('Mês', dataString.getMonth() + 1)
console.log('Ano', dataString.getFullYear())
console.log('Hora', dataString.getHours())
console.log('Min', dataString.getMinutes())
console.log('Seg', dataString.getSeconds())
console.log('ms', dataString.getMilliseconds())
console.log('Dia da semana', dataString.getDay()) // [0] Domingo, [6] Sábado

console.log(Date.now())

const msData = new Date(1618200926351)
console.log(msData.toString())

const leftZero = num => num >= 10 ? num : `0${num}`

function formatData (data) {
    const dia = leftZero(data.getDate())
    const mes = leftZero(data.getMonth() + 1)
    const ano = leftZero(data.getFullYear())
    const hora = leftZero(data.getHours())
    const min = leftZero(data.getMinutes())
    const seg = leftZero(data.getSeconds())

    return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`
}

const genData = new Date()
const brasilData = formatData(genData)
console.log(brasilData)
