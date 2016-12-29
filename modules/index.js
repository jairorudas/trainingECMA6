//import {CalculoDePeso as CalculoImcClass } from './classe.js'
//import {imc as CalculaImcFile} from './calculaImc.js'

/*
    Aqui estão varias formas de como exportar um modulo em nodeJs
*/

//recebedo uma classe eita em ECMA6. 
const CalculoImcClass = require('./classe.js');

//recebendo uma function que não é constructora, em ECMA6.
const CalculaImc = require('./calculaImc.js');

//recebendo uma funcção constructora.
const Calc = require('./calc.js');

//Chegando um Objeto, com o metodo imc dentro
const CalcImc = require('./returnObj.js');


//executando desde uma função recebida em ECMA6, pode ser utilziada em programação funcional.
console.log('==== Executando desde arrow fuction "./calculaImc" ====')
console.log(`Seu IMC é >>> ${CalculaImc.imc(64, 1.66)} Very nice! \n`);

//Executando desde uma classe em ECMA6
console.log('==== Executando desde uma classe arquivo "./classe"  ====')

let calculoComClasse = new CalculoImcClass(64, 1.66);
console.log(`Seu IMC é >>> ${calculoComClasse.imc} Woow!! \n `);   


// Executando desde uma function constructora arquivo './calc.js'.
console.log("==== Executando desde uma function constructora arquivo './calc'. ====")
let constructora = new Calc(64, 1.65);
console.log(`Seu IMC é ${constructora.imc(64, 1.65)} MMM Ok! \n `);

//Executando desde um objeto retornado './returnObj.js'
console.log("==== Executando desde o retorno de um objeto './returnObj'. ====")
console.log(`Seu IMC é ${CalcImc.imc(64, 1.65)} yeah!!`)