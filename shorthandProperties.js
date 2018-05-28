'use strict'

/**
 * Shorthand properties, são muito utlizados sobre tudo em alguns framework, exemplo VueJS
 * Exemplos:
 */
this.name = 'LUX'

/**
  * Normalmente fariamos o seguinte
  */

  const country1 = {
    name: 'Luxemburgo1',
    getName: function () {
        return this.name
    }
}

/**
 * Mas esse aqui é o shorthand do metodo anterior
 */

 const country2 = {
     name: 'Luxemburgo2',
     getName() {
         return this.name
     }
 }
 

/**
 * Assim this não faz referência ao scopo do objeto e sim ao scopo do modulo, do arquivo.
 */

const country3 = {
    name: 'Luxemburgo3',
    getName: () => {
        return this.name
    }
}

 console.log(country1.getName())
 console.log(country2.getName())
 console.log(country3.getName())