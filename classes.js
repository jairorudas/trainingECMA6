/*
    Em JavaScript quando temos classes e freezamos o objeto criado ou  congelamos
    serão congelados os valores primitivos, mas objetos poderão modificar esse objeto.
    Por exemplo se é passado como parametro um objeto date ele tem metodos internos que podem modificar 
    o valor que ele contem.
*/

/* Quando congelamos um objeto este não poderá ser extensivel. */

class Usuario {
    constructor(nome, sobrenome, diaNascimento){
        this._nome = nome,
        this._sobreNome = sobrenome,
        this._dia = diaNascimento;
        Object.freeze(this);
    }

    get diaNascimento(){
        console.log(`${this._dia}`);
    }

    get nomeCompleto(){
        console.log(`${this._nome} ${this._sobreNome}`);
    }

    set name(nome){
        this._nome = nome;
    }

    set idade(dia){
        this._dia = diaNascimento;
    }
}

console.log(Object.isExtensible(Number));
class UsuarioPremium extends Usuario {
    constructor(nome, sobrenome, idade, flag){
        super(nome, sobrenome, idade)
        this._flag = flag
    }

    get tudo(){
        console.log(`${this._nome} ${this._sobreNome} ${this._dia} ${this._flag}`)
    }
}

let diaNascimento = new Date().getDay();
let comprador = new UsuarioPremium( 'jairo','rudas', diaNascimento, 'visa'); 

comprador.tudo;

/* 
    Se dou um freeze no objeto não será possivel reestabelecer os valores dele.
    Só se for um objeto que ele está armazenando e esse objeto tem seus proprios metodos
    sim será possivel armazenar.
*/

//comprador._name = 'David';



