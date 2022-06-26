for (let i = 0; i <= 10; i++) {
  const pair = i % 2 === 0 ? 'Par' : 'Impar'
  console.log(`${i} ${pair}`)
}

const frutas = ['Maçã', 'Pêra', 'Uva', 'Laranja', 'Mamão']

for (let i = 0; i < frutas.length; i++) {
  console.log(`${i} - ${frutas[i]}`)
}