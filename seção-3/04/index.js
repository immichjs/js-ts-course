const hour = 13

if (hour >= 0 && hour <= 11) {
  console.log('Bom dia')
} else if (hour >= 12 && hour <= 17) {
  console.log('Boa tarde')
} else if (hour >= 18 && hour <= 23) {
  console.log('Boa noite')
} else {
  console.log('Hora inválida')
}

const haveMoney = true

if (haveMoney) {
  console.log('Pode comprar')
} else {
  console.log('Não pode comprar')
}