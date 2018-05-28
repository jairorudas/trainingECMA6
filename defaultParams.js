/**
 * 
 * @param {booleano} casado 
 * 
 * Podemos colocar um parametro como default se nenhum parametro é passado.
 */
const estado = (casado = false) => {
    return casado
}


console.log(estado())

