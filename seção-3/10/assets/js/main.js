const textDate = document.querySelector('#text-date')

// const leftZero = number => number < 10 ? `0${number}` : number
// const date = new Date()
// const dayWeek = date.getDay()
// const day = date.getDate()
// const month = date.getMonth()
// const year = date.getFullYear()
// const hour = leftZero(date.getHours())
// const minutes = leftZero(date.getMinutes())


// function formatDayWeek(dayWeek) {
//   switch (dayWeek) {
//     case 0:
//       return 'Domingo'
//     case 1:
//       return 'Segunda'
//     case 2:
//       return 'Terça'
//     case 3:
//       return 'Quarta'
//     case 4:
//       return 'Quinta'
//     case 5:
//       return 'Sexta'
//     case 6:
//       return 'Sábado'
//     default:
//       return 'Dia da semana inválida'
//   }
// }

// function formatMonth(month) {
//   switch (month) {
//     case 0:
//       return 'Janeiro'
//     case 1:
//       return 'Fevereiro'
//     case 2:
//       return 'Março'
//     case 3:
//       return 'Abril'
//     case 4:
//       return 'Maio'
//     case 5:
//       return 'Junho'
//     case 6:
//       return 'Julho'
//     case 7:
//       return 'Agosto'
//     case 8:
//       return 'Setembro'
//     case 9:
//       return 'Outubro'
//     case 10:
//       return 'Novembro'
//     case 11:
//       return 'Dezembro'
//     default:
//       return 'Mês inválido'
//   }
// }

// const dayWeekFormated = formatDayWeek(dayWeek)
// const monthFormated = formatMonth(month)
// textDate.innerHTML = `${dayWeekFormated}, ${day} de ${monthFormated} de ${year}<br /> ${hour}:${minutes}`


const date = new Date()
textDate.innerHTML = date.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })