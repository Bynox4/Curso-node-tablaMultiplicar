const argv = require('yargs')
    .option('n', {
        alias: 'num',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Num hasta donde quieres la tabla'
    })
    .check( (argv, options) => {
        if( isNaN(argv.n) ){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;


// console.log(process.argv);
// const [ , , arg3 = 'num=5' ] = process.argv;
// const [ , num = 5 ] = arg3.split('=');

// console.log(process.argv);

module.exports = argv;