const firstName = 'Mich'
const lastName = 'Assis'

const talkName = () => firstName + ' ' + lastName

class Person { 
  constructor (name) { 
    this.name = name
  }
}

module.exports = { talkName, Person }
