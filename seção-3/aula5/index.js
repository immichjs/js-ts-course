const userCoin = 1000

const userLevel = userCoin ? 'Usuário VIP' : 'Usuário normal'
console.log(userLevel)

const userColor = null
const standardColor = userColor || 'Preta'

console.log(userLevel, standardColor)
