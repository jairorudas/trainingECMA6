//import {CalculoDePeso as CalculoImcClass } from './classe.js'
//import {imc as CalculaImcFile} from './calculaImc.js'

const CalculoImcClass = require('./classe.js');
const CalculaImcFile = require('./calculaImc.js');

setTimeout(() => {
console.log('============== Calculo desde função  =======================')

console.log(`Seu IMC é >>> ${CalculaImcFile.imc(64, 1.66)}`);

}, 2000)




setTimeout(() =>{
    console.log('============== Calculo desde a classe  =======================')

    let calculoComClasse = new CalculoImcClass(64, 1.66);
    console.log(`Seu IMC é >>> ${calculoComClasse.imc}`);    
}, 1000)