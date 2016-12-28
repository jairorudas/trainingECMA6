//Calcula IMC
// primeira forma de exportar um modulo Sintax ECMA6.

// A variavel numero fica privada pois não foi inclusa no module.exports.
var peso,
    altura; 

module.exports.imc = (peso, altura) => peso / (Math.pow(altura, 2));