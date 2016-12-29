class CalculoDePeso{
    constructor(peso, altura){
        this._peso = peso,
        this._altura = altura
    }

    get imc() {
     return this._peso / (Math.pow(this._altura, 2));   
    }
}

module.exports =  CalculoDePeso;