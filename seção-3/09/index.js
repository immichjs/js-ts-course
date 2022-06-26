const date = new Date()

const dayWeek = date.getDay()

function formatDayWeek(dayWeek) {
  switch (dayWeek) {
    case 0:
      return 'Domingo'
    case 1:
      return 'Segunda'
    case 2:
      return 'Terça'
    case 3:
      return 'Quarta'
    case 4:
      return 'Quinta'
    case 5:
      return 'Sexta'
    case 6:
      return 'Sábado'
    default:
      return 'Dia da semana inválida'
  }
}

const dayWeekFormated = formatDayWeek(dayWeek)

console.log(dayWeekFormated)