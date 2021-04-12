function getTextDayWeek (day) {
    let textWeekDay

    switch (day) {
        case 0:
            textWeekDay = 'Domingo'
            return textWeekDay
        case 1:
            textWeekDay = 'Segunda'
            return textWeekDay
        case 2:
            textWeekDay = 'Terça'
            return textWeekDay
        case 3:
            textWeekDay = 'Quarta'
            return textWeekDay
        case 4:
            textWeekDay = 'Quinta'
            return textWeekDay
        case 5:
            textWeekDay = 'Sexta'
            return textWeekDay
        case 6:
            textWeekDay = 'Sábado'
            return textWeekDay
        default:
            textWeekDay = 'Dia da semana inválido'
            return textWeekDay
    }
}


const data = new Date()
const dayWeek = data.getDay()
const textDayWeek = getTextDayWeek(dayWeek)

console.log(dayWeek, textDayWeek)
