function createPerson(name, lastName, height = 1.65, weight = '60') {
  return {
    name,
    lastName,
    age: 20,
    height,
    weight,
    say() {
      console.log(`Hi, I'm ${this.name} ${this.lastName} - (${this.age})`);
    },
    get imc() {
      const imc = this.weight / (this.height ** 2).toFixed(2)
      return imc
    },
    get fullName() {
      return `${this.name} ${this.lastName}`
    },
    set fullName(value) {
      value = value.split(' ')
      this.name = value.shift()
      this.lastName = value.join(' ')
      console.log(name)
    }
  }
}

const Mich = createPerson('Mich', 'França')
console.log(Mich)
Mich.say()
console.log(Mich.fullName)

const Laura = createPerson('Laura', 'Armendane', 1.55, 70)
console.log(Laura.imc)
Laura.fullName = 'Laura Lourenço Armendane'
console.log(Laura.fullName)

