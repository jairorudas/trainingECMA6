const help = require('./help')
const keyboard = require('./keyboard.js');

// Object.keys(process).forEach(function(value){
//     console.log(value);
// });

help();

//Todos os callback devem ser uma funcção.
keyboard.onReadeble((msg) => {
  switch (msg) {
      case 'a':
          console.log('/====================/');
          console.log(`pid: ${process.pid}`)
          console.log('/====================/');
          break;

      case 'b':
          console.log('/====================/');
          console.log(`title: ${process.title}`)
          console.log('/====================/');
          break;
      case 'c':
          console.log('/====================/');
          console.log(`arch: ${process.arch}`);
          console.log('/====================/');
          break;
      case 'p':
          console.log('/====================/');
          console.log(`platfom: ${process.platform}`);
          console.log('/====================/');
          break;
      case 'q':
          process.exit();
          break;
      case 'v':
        console.log('/====================/');
        console.dir(process.versions);
        console.log('/====================/');
        break;
      case 'u':
        console.log(`temp desde que o processo foi iniciado: ${process.uptime()}`);
        break;
      default:
          help();
          break;
  }
});

//Posso interceptar eventos proprios de nodeJS, abaixo um exemplo
process.on('exit', () => console.log('Tchaouuu!! o/ '));
