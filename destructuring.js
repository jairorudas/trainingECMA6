/*
    Vamos destrturar objetos.
*/

const pessoa = {
    nome: 'Jairo',
    sobrenome: 'Rudas',
    idade: 30,
    profissao: 'Programador',
    endereco: {
        rua: 'Dr Leal',
        numero: 25
    }
}

/*
    Extraindo as propriedade do objeto pessoa, e declarando-as fora no arquivo,
    mas o objeto pessoa continua intacto não é modificado. Além colocamos um parametro padrão que é Rio de janeiro.
*/
let {nome, sobrenome, idade, profissao, endereco:{rua} , estado = `Rio de Janeiro`} = pessoa;
console.log(nome, sobrenome, idade, profissao, estado, rua);


/*
    Aqui trocamos os nomes das propriedades do objeto pessoa para espanhol,
    quer dizer que a variaveis passam a ser os nomes em espanhol e não em portugues.

    Como se ve encima let não permitiria declarar variaveis com o mesmo nome no mesmo scopo.
*/
let {nome: nombre, sobrenome: apellido, idade: edad, profissao: profesion, estado: estadocivil} = pessoa;
console.log(nombre, apellido, edad, profesion, estadocivil);
