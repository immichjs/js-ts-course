const clock = document.querySelector('.relogio')
let seconds = 0
let timer

const createTimeFromSeconds = (seconds) => {
  const date = new Date(seconds * 1000)

  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  })
}

const startTime = () => {
  clearInterval(timer)
  clock.classList.remove('pausado')

  timer = setInterval(() => {
    seconds++
    clock.innerHTML = createTimeFromSeconds(seconds)
  }, 1000)
}

const pauseTime = () => {
  clearInterval(timer)
  clock.classList.add('pausado')
}

const resetTime = () => {
  clearInterval(timer)
  clock.classList.remove('pausado')
  clock.innerHTML = '00:00:00'
  seconds = 0
}

document.addEventListener('click', ({ target }) => {
  if (target.classList.contains('iniciar')) startTime()
  if (target.classList.contains('pausar')) pauseTime()
  if (target.classList.contains('zerar')) resetTime()
})