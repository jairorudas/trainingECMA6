const options = [
    'Escreva uma opção depois de executar o arquivo',
    'a) pid',
    'b) title',
    'c) arch',
    'd) platform',
    'v) Versões',
    'q) Exit',
    'u) upTime'
]

let showOptions = function(){
    options.forEach((option) => console.log(`${option} \n`))
}

module.exports = showOptions;
