const net = require('net');

const client = net.connect({host: '127.0.0.1', port: 3000});

//Escutando finalização do socket por parte do server
client.on('end', () => process.exit());

process.stdin.on('readable', () => {
  //O lido aqui é um buffer.
  let message = process.stdin.read();

  if (!message) return;

  // Conversão do buffer para string.
  message = message.toString().replace(/\n/, '');

  //envio de messages para o servidor aqui a baixo.
  client.write(message);
});

//client.on('connect', () => client.write('Olá, eu sou um cluennte') )


// O codigo a baixo faz com que apareça tudos os mensagens enviados desde o servidor.
client.on('data', (message) => {
  console.log(message.toString());
})
