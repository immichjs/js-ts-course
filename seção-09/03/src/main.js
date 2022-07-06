import generateCPF from './modules/generateCPF.module'
import './assets/css/style.css';
import GenerateCPF from './modules/generateCPF.module';

(function main () {
  const generatedCPF = document.querySelector('.generated-cpf')
  const generate = new GenerateCPF()

  generatedCPF.innerHTML = generate.generateNewCPF()
})()