(() => {
  const person = {
    name: 'Mich',
    lastName: 'França',
    age: 20,
    say() {
      console.log(`Hi, I'm ${this.name} ${this.lastName} - ${this.age}`);
    }
  }

  console.log(person)
  person.say()
})()