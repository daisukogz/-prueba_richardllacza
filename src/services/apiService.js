// src/services/apiService.js
const axios = require('axios');

async function fetchData(endpoint) {
    try {
        const apiUrl = 'https://swapi.py4e.com/api/';
        const response = await axios.get(apiUrl + endpoint);

        return response.data;
    } catch (error) {
        console.error('Error al obtener datos:', error.message);
        //console.error(error);
        throw error;
    }
}

module.exports = {
    fetchData,
};
