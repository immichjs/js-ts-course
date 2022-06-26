let nome = 'Juh'
const alunos = ['Michel', 'Maria', 'João']
console.log(alunos)
console.log(alunos[0])
console.log(alunos[2])

alunos[0] = 'Ahri'
console.log(alunos)

alunos[3] = 'Luiza'
console.log(alunos)

console.log(alunos.length)

alunos.push(nome)
console.log(alunos)

nome = 'Bea'

alunos.unshift(nome)
console.log(alunos)

const removido = alunos.pop()
console.log(removido)

const removendoPrimeiro = alunos.shift()

console.log(removendoPrimeiro)

delete alunos[1]
console.log(alunos)

console.log(alunos.slice(0, 3))
console.log(alunos.slice(0, -2))

console.log(typeof alunos)
console.log(alunos instanceof Array)