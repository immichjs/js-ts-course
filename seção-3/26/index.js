function showHour() {
  const date = new Date()

  return date.toLocaleString('pt-BR', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

const intervalFunction = () => console.log(showHour())
const timer = setInterval(intervalFunction, 1000)

const clearTimer = () => {
  clearInterval(timer)
  console.log('Finalizado')
}
setTimeout(clearTimer, 10000);