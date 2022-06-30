const ajax = (object) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(object.method, object.url, object.async)
    xhr.send()
  
    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText)
      } else {
        reject({
          code: xhr.status,
          message: xhr.statusText
        })
      }
    })
  })
}

document.addEventListener('click', (element) => {
  if (element.target.tagName.toLowerCase() === 'a') {
    element.preventDefault()
    loadPage(element.target)
  }
})

async function loadPage (element) {
  const href = element.getAttribute('href')
  const response = await ajax({
    method: 'GET',
    url: href,
    async: true,
  })

  try {
  loadResult(response)
  } catch (error) {
    console.log(error)
  }
}

function loadResult(response) {
  const result = document.querySelector('.result')
  result.innerHTML = response
}