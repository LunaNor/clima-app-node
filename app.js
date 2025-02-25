const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/* argv.direccion */
/* lugar.getLugarLatLng( argv.direccion )
    .then( console.log );  */

/* clima.getClima( 40.750000, -74.000000)
    .then(console.log)
    .catch( console.log); */

const getInfo = async (direccion) => {

    try {
        const coords = await lugar.getLugarLatLng( direccion ); // el resultado de la promesa está almacenado aquí
        const temp = await clima.getClima( coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp }.`;     
    } catch (error) {
        return `No se pudo determianr el clima de ${ direccion }`;
    }
    


}

getInfo( argv.direccion)
    .then( console.log)
    .catch( console.log);
