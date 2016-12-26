/*
    new Promises
    Primese.all()
    Primese.reject()
    Primese.resolve()
    Promise.race()
*/

const fs = require('fs')


function readFile(name){
    return new Promise(function(resolve, reject){
        fs.readFile(name, function(err, content){
            if(err)  return reject('Fallo la lactura');
            else resolve(content);

            //Não funciona com arrow functions.
            //if (err => reject('Fallo la lactura'));
            //else () => resolve(content);
        })
    })
}

// aleitura destas funções é asincrona e se imprime quando a leitura de todas as readFile é terminada.
Promise.all(
        [readFile('./lorem.txt'), 
        readFile('promises.js'), 
        readFile( 'spread.js') 
        ]).then(responses => console.log(responses.length))

//Esta função race chama a promise quando termina de ler o primeiro arquivo.
Promise.race(
        [readFile('./lorem.txt'), 
        readFile('promises.js'), 
        readFile( 'spread.js') 
        ]).then(responses => console.log(responses.toString()))


function writeFile(name, content){
    return new Promise(function(resolve, reject){
        fs.writeFile(name, content, function(err){
            if(err) reject('Falho a escrita do arquivo');
            else resolve();
        })
    })
}

readFile('./lorem.txt')
.then(content => writeFile('./cantidad.txt', content.length))
//Catch é chamado se algumas das funções acima readFile ou writeFile falhar.
.catch(err => console.log(`Hubo um error ${err}`))