//é uma tecnica par isolar codigo reutilizaavel em outros lugares exportando aquilo que será reutilizado.
exports.max = 1000; // isso cria um contexto de execução e não global.

//não declarar no scopo global por exemplo
 global.max = 1000; //isso é errado!