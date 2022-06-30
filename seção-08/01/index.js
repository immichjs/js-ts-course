function waitASecond (message, timer) {
  return new Promise((resolve, reject) => {
    if (typeof message !== 'string') reject('Bad value')
    setTimeout(() => {
      resolve(message)
    }, timer)
  })
}

function random(min, max) {
  max *= 1000
  min *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

waitASecond('Frase 1', random(1, 3))
  .then(response => {
    console.log(response)
    return waitASecond('Frase 2', random(1, 3))
  })
  .then(response => {
    console.log(response)
    return waitASecond(123, random(1, 3))
  })
  .then(response => {
    console.log(response)
  })
  .then(() => {
    console.log('Terminado')
  })
  .catch(error => console.log(error))