class EletronicDevice {
  constructor (name) {
    this.name = name
    this.on = false
  }

  turnOn () {
    if (this.on) {
      console.log(`${this.name} já está ligado`)
      return
    }

    this.on = true
    console.log(`${this.name} ligado`)
  }

  turnOff () {
    if (!this.on) {
      console.log(`${this.name} já está desligado`)
      return
    }
    
    this.on = false
    console.log(`${this.name} desligado`)
  }
}

const d1 = new EletronicDevice('Smartphone')
d1.turnOn()

class Smartphone extends EletronicDevice {
  constructor (name, color) {
    super(name)
    this.color = color
  }
}

const iPhone = new Smartphone('iPhone XR', 'Preto')
iPhone.turnOn()

class Tablet extends EletronicDevice {
  constructor (name, haveWifi) {
    super(name)
    this.haveWifi = haveWifi
  }

  turnOn () {
    console.log('Método turnOn() da classe super foi alterado.')
  }

  sayHi () {
    console.log(`${this.name}, oi.`)
  }
}

const tab = new Tablet('Samsung Tab', true)
tab.turnOn()
tab.sayHi()