function showHour(date) {
  if (date && !(date instanceof Date)) {
    throw new Error('Esperando instância de Date')
  }

  if (!date) {
    date = new Date()
  }

  return date.toLocaleString('pt-BR', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

try {
  const date = new Date('01-01-1970 12:58:12')
  const hour = showHour(date)

  console.log(hour)
} catch (error) {
  console.log(error.message)
} finally {
  console.log('Finalizado')
}