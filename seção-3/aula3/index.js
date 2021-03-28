const hour = 25

if (hour >= 0 && hour < 12) {
    console.log('Bom dia')
} else if (hour >= 12 && hour <= 18) {
    console.log('Boa tarde')
} else if (hour > 18 && hour <= 24) {
    console.log('Boa noite')
} else {
    console.log('Horario inválido')
}

const haveMoney = true

if (haveMoney) {
    console.log('Vou sair de casa')
} else {
    console.log('Não vou sair de casa')
}

let number = 12

// Para de executar a estrutura if quando uma das condições forem satisfeitas
if (number >= 0 && number <= 5) {
    console.log('O numero está entre 0 e 5')
} else if (number >= 6 && number <= 8) {
    console.log('O numero está entre 6 e 8')
} else if (number >= 9 && number <= 11) {
    console.log('O numero está entre 9 e 11')
} else {
    console.log('O numero não está entre 0 e 11')
}

console.log('Isso aqui está fora da estrutura if/else')