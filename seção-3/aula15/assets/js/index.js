const alunos = ['Luiz', 'Mich', 'Nicky']

for (let aluno of alunos) {
  console.log(aluno)
}

alunos.forEach((element, index, array) => console.log(element, index, array))
