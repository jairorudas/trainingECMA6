/**
 * Array.find responde com a primeira ocorrencia que satisfaz a ecuação 
 * com o valor achado e não o index como o caso de indexof.
 */

const arr = [5,1,4,7]

const res = arr.find(x => x > 1) 

console.log('------------------------------------');
console.log(res);
console.log('------------------------------------');

/**
 * Outra caracteristica de Array.find é a capaciadade de achar dadso dentro de Array de objetos.
 * Sempre devolvera o primeiro match ou elemento qeu achou.
 */

 const resAPI = [{
     name: 'Jairo',
     age: 31,
     country: 'Brasil'
 },
 {
    name: 'David',
    age: 22,
    country: 'Colômbia'
 }
]

console.log('------------------------------------');
console.log(resAPI.find(user => user.name === 'Jairo' || user.name === 'David'));
console.log('------------------------------------');


/**
 * FindIndex retorna o indice que esse elemento ocupa no array.
 */
console.log('------------------------------------');
console.log(resAPI.findIndex(user => user.name === 'Jairo' || user.name === 'David'));
console.log('------------------------------------');