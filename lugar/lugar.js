const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI( dir); //transformamos la cadena de un url seguro

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'x-rapidapi-key':'9b3b412e5fmsh236ea5256159e7bp1853c3jsn562683bca524'}
    
    });
    
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    /* recuperamos el objeto que retorna la respuesta (resp) de la promesa */

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    /* retornamos creando un objeto con los valores extraidos de la respuesta */

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}
