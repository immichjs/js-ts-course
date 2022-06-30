function waitASecond (message, timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof message !== 'string') {
        reject('Bad value')
        return
      }

      resolve(message)
    }, timer)
  })
}

function random(min, max) {
  max *= 1000
  min *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

waitASecond('Fase 1', random(0, 3))
  .then(value => {
    console.log(value)
    return waitASecond('Fase 2', random(0, 3))
  })
  .then(value => {
    console.log(value)
    return waitASecond('Fase 3', random(0, 3))
  })
  .then(value => console.log(value))
  .catch(error => console.log(error))

async function execute() {
  try {

    const fase1 = await waitASecond('[Async] Fase 1', random(0, 3))
    console.log(fase1)
    const fase2 = await waitASecond(1000, random(0, 3))
    console.log(fase2)
    const fase3 = await waitASecond('[Async] Fase 3', random(0, 3))
    console.log(fase3)
    
    console.log('Fim')
  } catch (error) {
    console.log(error)
  }

}
execute()