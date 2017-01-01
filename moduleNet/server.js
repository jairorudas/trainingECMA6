const net = require('net');

const connections = [];

//Função que envia mensagens a todos os sockets conectados na porta 3000
let broadcast = (message, origin) => {
  connections.forEach((conection) => {

     //console.log(conection );

     /*
      Aqui acontece uma coisa curiosa:
      Se eu tento comparar dois objeto identicos como por exemplo:
      var k = {nome: 'luis'};
      var h = {nome: 'luis'};
      console.log(k === h) // false
      o resultado é false porque eles estão apontando para posições em
      memoria diferentes e javascript trata eles como coisas independente,
      ainda que seu conteudo for o mesmo.

      NodeJs identifica  o objeto CONNECTION de onde veio a mensagem e EXTRAI
      esse objeto da memoria (pois já é uma conecção valida), consecuentemente
      essa conecção deve estar no objeto array que chamamos connections.

      Para ser mais ilustrativos vamos ver esse exemplo:
      Quando um usuario se conectou foi criado OBJ1 e criou um registro em
      memoria chamado Memoria0001 aí está guardado o objeto CONNECTION com toda
      as informações da conecção.

      Depois esse usuario envia uma mensagem e NodeJs cria um registro OBJ2
      apontando para a mesma posição de memoria. Então se a informação da
      posição de memoria => memoria0001 mudar ONJ1 e OBJ2 também vão mudar
      porque eles são uma copia dinamica do que esta nessa posição. Por isso
      é posivel comparar dois objeto e eles serem TRUE SE E SÓ SE ELES ESTÃO
      APONTANDO PARA A MESMO LUGAR EM MEMORIA.

      OBJ1 === Memoria0001 === OBJ2

      Aqui temos esse caso anterior, origin e conection estão apontando para o
      mesmo lugar em memoria.
     */
    if (conection === origin) return;
    conection.write(message);
  })
};

//criando uma conecção, e enviando feedback
net.createServer((connection) => {
  //adicionando conecções ao array connections.
  connections.push(connection);

  connection.write('Servidor Online ;)');

  connection.on('data', (message) => {
    let command = message.toString();
    if (command.indexOf('/nickname') === 0) {
      let nickname = command.replace('/nickname', '');
      broadcast(`${connection.nickname} is now ${nickname}`);
      connection.nickname = nickname;
      return;
    }
    /* O servidor além de receber a mensagem, recebe a conecção de onde veio
       a mensagem.
    */
    broadcast(`${connection.nickname} > ${message}`, connection);
  });
}).listen(3000);
