//aplicado a nova feature de valor padrão.

function soma(a,b,c, d = 1){
    console.log((a + b + c + d).toFixed(2));
}


//operador spread. ...
let colecao = [34, 30, 45];


//como era feito antigamente.
soma.apply(null, colecao);

console.log('=============== Operador spread passado como parametro ECMA6=======================');
//Agora no ECMA6
soma(...colecao);


/*
    Criar um novo Array com os novos valores, acrescentando eles no final do Array original.
    Adicionar novos elementos a um array. 
*/

//ECMA5
console.log('============= ECMA5 criando um array a partir de outro Array ====================');
let novaColecaoES5 = colecao.concat([15, 45, 25]);
console.log(novaColecaoES5);

//ECMA6
console.log('========== ECMA6 criando um array a partir de outro Array ====================');
let novaColecaoES6 = [...colecao, 15, 45, 25];
console.log(novaColecaoES6);


/*
    Aqui utilizamos o operador Spread como parametro, ele converte qualquer parametro passado num Array.
*/

console.log('================ Operador Spread no parametro da função EX1 ====================')
const pesoMedio = (...medidas) => medidas.reduce((v1, v2, ind) => v1 + v2);
console.log(pesoMedio(1,5,8));


console.log('================ Operador Spread no parametro da função  EX2 ====================')
function f(x, ...y) {
  // y is an Array
  return x * y.length;
}
console.log(f(3, "hello", true) === 6);

