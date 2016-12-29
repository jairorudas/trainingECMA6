/*
    
    EM JavaScript temos timer que são:
    * setTimeout(callback, tempo)
    * setInterval(callback, tempo)
    * setImmediate(callback)

 */

/*
    Calculando a diferença de tempo entre setTimeout e setImmediate.

 */
console.time('T');
setTimeout(() => {console.timeEnd('T')}, 0);

//coloca na fila para ser processada em seu momento.
console.time('I');
setImmediate(() => {console.timeEnd('I')});
