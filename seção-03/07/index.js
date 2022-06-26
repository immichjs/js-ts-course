const userPoints = 999

if (userPoints >= 1000) {
  console.log('Usuário VIP')
} else {
  console.log('Usuário normal')
}

const levelUser = userPoints >= 1000 ? 'Usuário VIP' : 'Usuário normal'
const userColor = null
const standardColor = userColor || 'Preto'
console.log(levelUser, standardColor)