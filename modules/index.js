//import {CalculoDePeso as CalculoImcClass } from './classe.js'
//import {imc as CalculaImcFile} from './calculaImc.js'

/*
    
    Aqui estão varias formas de como exportar um modulo em nodeJs

*/

const CalculoImcClass = require('./classe.js');
const CalculaImc = require('./calculaImc.js');
const Calc = require('./calc.js');


console.log('==== Executando desde arrow fuction "./calculaImc" ====')
console.log(`Seu IMC é >>> ${CalculaImc.imc(64, 1.66)} \n`);


console.log('==== Executando desde uma classe arquivo "./classe"  ====')

let calculoComClasse = new CalculoImcClass(64, 1.66);
console.log(`Seu IMC é >>> ${calculoComClasse.imc} \n `);   


// Executando desde uma function constructora arquivo './calc'.
console.log("==== Executando desde uma function constructora arquivo './calc'. ====")
let constructora = new Calc(64, 1.65);
console.log(`Seu IMC é ${constructora.imc(64, 1.65)}`);