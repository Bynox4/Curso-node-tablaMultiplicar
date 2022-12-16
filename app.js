const { crearTablas } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// const num = 3;

crearTablas( argv.n, argv.l, argv.h )
    .then( n => console.log(n, 'creado') )
    .catch(err => console.log(err) )