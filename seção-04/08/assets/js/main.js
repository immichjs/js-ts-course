function createCalc() {
  return {
    display: document.querySelector('.display'),
    start() {
      this.buttonClicks()
    },
    clearDisplay() {
      this.display.value = ''
    },
    removeOne() {
      this.display.value = this.display.value.slice(0, -1)
    },
    result() {
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
    },
    buttonClicks() {
      document.addEventListener('click', ({ target }) => {
        if (target.classList.contains('btn-num')) {
          if (this.display.value === 'Error') this.display.value = ''
          this.buttonToDisplay(target.innerText)
        }

        if (target.classList.contains('btn-clear')) {
          this.clearDisplay()
        }

        if (target.classList.contains('btn-del')) {
          this.removeOne()
        }

        if (target.classList.contains('btn-eq')) {
          this.result()
        }
      })
    },
    buttonToDisplay(value) {
      this.display.value += value
    }
  }
}

const calculator = createCalc()
calculator.start()