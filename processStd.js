/*
    As flags 1> e 2> podem ser utilizadas para direcionar a respostas e serem escritas em arquivos de acordo com a respostas
    
    Além as saidas *stdout* e  *stderr* são utilizadas para tal fim.

 */

konsole = {
    log: (msg) => process.stdout.write(`${msg} ${!!process.stderr.isTTY} \n`), 

    yes: function(msg){
        process.stdout.write(`Ola eu sou o .stdout do node :) \n `)
    },
    error: () => process.stderr.write(`Eu sou o stderr e deu problema!! :( \n`)
}

konsole.log('is TTY:');
konsole.error();
konsole.yes()