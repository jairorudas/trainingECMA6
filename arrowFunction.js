let name = 'Jairo'

let func = name =>  {
    console.log(name);
};

func(name);
console.log('====================================');

// trabalhando arrow function com uma sentença que automaticamente devolve um dado.
const array = [25,65, 34, 'rudas'];
let filtro = array.filter(value => value < 60);
console.log(filtro);

console.log('====================================');
//Trabalhando arrow functions com grupo de sentenças 
let groupSentece = array.map( value => {
    if(typeof value === 'string') console.log('rudas')
    else return value  * 2;
});

console.log(groupSentece);



 