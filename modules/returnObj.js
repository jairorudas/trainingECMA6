let CalcImc = function(){

    let imc = function(a, b){
        return (a / (Math.pow(b, 2)));
    }

    return {
        imc: imc
    }
}

module.exports = CalcImc();