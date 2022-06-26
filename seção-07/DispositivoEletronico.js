class DispositivoEletronico {
  constructor (name) {
    this.name = name
    this.on = false
  }

  turnOn () {
    if (this.on) {
      console.log(`${this.name} já está ligado.`)
      return
    }

    this.on = true
    console.log(`${this.name} ligado.`)
  }
  
  turnOff () {
    if (!this.on) {
      console.log(`${this.name} já está desligado.`)
      return
    }
    
    this.on = false
    console.log(`${this.name} desligado.`)
  }
}

class Smartphone extends DispositivoEletronico {
  constructor (name, model, color) {
    super(name)
    this.color = color
    this.model = model
  }
}

const smartphone = new Smartphone('Xiomi', 'Redmi 9', 'Violet')
console.log(smartphone)

class Tablet extends DispositivoEletronico {
  constructor (name, wifi) {
    super(name)
    this.wifi = wifi
  }

  turnOn () {
    console.log('Tablet ligado.')
  }
}

const tablet = new Tablet('Samsung S6', true)
tablet.turnOn()
