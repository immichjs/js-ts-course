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

const promises = [
  waitASecond('Frase 1', 1000),
  waitASecond('Frase 2', 2000),
  waitASecond('Frase 3', 3000),
]
console.log(promises)

Promise.all(promises)
  .then(values => console.log(values))
  .catch(error => console.log(error))

Promise.race(promises)
  .then(value => console.log(value))
  .catch(error => console.log(error))

function downloadPage () {
  const inCache = false

  if (inCache) {
    return Promise.reject('Página em cache')
  } else {
    return waitASecond('Baixei a página', 5000)
  }
}

downloadPage()
  .then(data => {
    console.log(data)
  })
  .catch(error => console.log(error))