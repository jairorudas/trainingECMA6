let text = 'Turing nasceu em Londres enquanto seu pai estava de férias do seu trabalho no Indian Civil Service (ICS) em Chhatrapur'

//Retorna true o false 

console.log('------------------------------------');
console.log(text.includes('londres'), 'Metodo includes') // 
console.log('------------------------------------');

// startWith recebe dois parametros, a string a ser procurada e desde qual posição. retorna true ou false
console.log('------------------------------------');
console.log(text.startsWith('Turin', 0), 'startWith'); // true
console.log('------------------------------------');

console.log('------------------------------------');
console.log(text.startsWith('turin', 0), 'startWith' ); // false
console.log('------------------------------------');

console.log('------------------------------------');
console.log(text.startsWith('Turin', 2), 'startWith'); // false
console.log('------------------------------------');


// EndWith Recebe também dois parametros, a string a procurar e a posição de onde deve ser buscada.
console.log('------------------------------------');
console.log(text.endsWith('ur', 10), 'Metodo EndWith'); // true
console.log('------------------------------------');

console.log('------------------------------------');
console.log('Fala '.repeat(2), 'Metodo Repeat'); 
console.log('------------------------------------');

