function Calc() {
  this.display = document.querySelector('.display')

  this.start = () => {
    this.buttonClicks()
    this.getEnter()
  }
  this.clearDisplay = () => this.display.value = ''
  this.removeOne = () => this.display.value = this.display.value.slice(0, -1)

  this.result = () => {
    let count = this.display.value

    try {
      count = eval(count)

      if (!count) {
        this.display.value = 'Error'
        return
      }

      this.display.value = String(count)
    } catch (error) {
      this.display.value = 'Error'
      return
    }
  }

  this.getEnter = () => {
    document.addEventListener('keypress', ({ keyCode }) => {
      if (keyCode === 13) {
        this.result()
      }
    })
  }

  this.buttonClicks = function () {
    document.addEventListener('click', ({ target }) => {
      if (target.classList.contains('btn-num')) {
        if (this.display.value === 'Error') this.display.value = ''
        this.buttonToDisplay(target.innerText)
      }

      if (target.classList.contains('btn-clear')) this.clearDisplay()
      if (target.classList.contains('btn-del')) this.removeOne()
      if (target.classList.contains('btn-eq')) this.result()
    })
  }

  this.buttonToDisplay = (value) => {
    this.display.value += value
    this.display.focus()
  }
}

const calculator = new Calc()
calculator.start()