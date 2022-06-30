class RemoteController {
  constructor (tv) {
    this.tv = tv
    this.volume = 0
  }

  increaseVolume () {
    this.volume += 2
  }

  decreaseVolume () {
    this.volume -= 2
  }

  static changeBattery () {
    console.log(`${this.name} Pilha trocada.`) 
  }
}

const control = new RemoteController('LG')
control.increaseVolume()
control.increaseVolume()
control.increaseVolume()
control.increaseVolume()
RemoteController.changeBattery()
console.log(control)