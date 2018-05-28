/**
 * Swap de variaveis semm precisar criar uma variavel temp
 */
let age1 = {num:1};
let age2 = 31;

[age2, age1] = [age1, age2];
console.log('------------------------------------');
console.log(age1, age2);
console.log('------------------------------------');