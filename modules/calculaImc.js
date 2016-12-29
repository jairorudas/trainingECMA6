//Calcula IMC
// primeira forma de exportar um modulo Sintax ECMA6.

/* 
    As variaveis a seguir, estão só de forma ilustrativa. tudo que esteja fora do module.exports
    não será visivel fora do modulo.
*/ 

var peso,
    altura; 

module.exports.imc = (peso, altura) => peso / (Math.pow(altura, 2));