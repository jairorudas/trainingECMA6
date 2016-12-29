let Calc = function(a, b){
    this._peso = a;
    this._altura = b;

    this.imc = function(){
        return (this._peso / (Math.pow(this._altura, 2)));
    }
}

module.exports = Calc;

