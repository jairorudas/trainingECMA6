const help = require('./help')

// Object.keys(process).forEach(function(value){
//     console.log(value);
// });

let options = process.argv.slice(2);

if (options.length == 0) {
    help();
    return;
}


switch (options[0]) {
    case 'a':
        console.log(`pid: ${process.pid}`)
        break;

    case 'b':
        console.log(`title: ${process.title}`)
        break;
    case 'c':
        console.log(`arch: ${process.arch}`)
        break;
    case 'd':
        console.log(`domain: ${process.domain}`)
        break;
    default:
        console.log(help);
        break;
}
