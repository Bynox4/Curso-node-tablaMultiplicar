const fs = require('fs');
const colors = require('colors');

const crearTablas = async( num = 5, listar = false, hasta = 10 ) => {

    try {
        let salida = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${num} x ${i} = ${num * i}\n`;
        }
        
        if( listar ){
            console.log('**********************'.bgYellow);
            console.log(`    Tabla del: ${num}      `.bgBlue);
            console.log('**********************'.bgRed);
            console.log(salida.green);
        }
        
        fs.writeFileSync( `./salida/tabla-${num}.txt`, salida);

        return `tabla-${num}.txt creada`;

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearTablas
}