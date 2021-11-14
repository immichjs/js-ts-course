function myTest () {
  console.log('Este é meu teste')
}

class ControleRemoto {
  constructor (tv) {
    this.tv = tv
    this.volume = 0
    myTest()
  }

  turnUpTheVolume () {
    this.volume += 5
    console.log(this.volume)
  }
  
  turnDownTheVolume () {
    this.volume -= 5
    console.log(this.volume)
  }

  static changeBattery () {
    console.log('Ok, vou trocar')
  }
}

const controle = new ControleRemoto('LG')
controle.turnUpTheVolume()

ControleRemoto.changeBattery()
