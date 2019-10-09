const axios = require('axios');


const getClima = async (lat, lng) => {

    const resp =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=63c92228ccf2f9c40d6a43cb29454cf6&units=metric`);

    return resp.data.main.temp;


}

module.exports = {
    getClima
}