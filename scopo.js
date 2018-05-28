//let cria um scopo dentro de cada ciclo.
let callbacks = [];

for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 };
}
callbacks[0]() === 0
callbacks[1]() === 2
callbacks[2]() === 4
console.log(callbacks);

/**
 * Scopos de variaveis por blocos.
 * vemos que podemos criar blocos de codigo com chave e encapsular variaveis.
 */

{
    let age = 30
    console.log(age)
  }
 
 
  {
    let age = 60
    console.log(age)
  }
