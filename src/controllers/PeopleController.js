// src/controllers/PeopleController.js
const { fetchData } = require('../services/apiService');
const People = require('../models/People');

async function getPeople(req, res) {
    try {
        const personId = req.params.id;
        console.log('test', req.params);
        const data = await fetchData(`people/${personId}`);

        // Crear una instancia de la clase Person con los datos de la API
        const person = new People(data);
        // Traducción de los nombres de las propiedades al español
        const datosEnEspañol = person.traducirAlEspañol();

        res.json(datosEnEspañol);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al obtener datos desde la API de Star Wars' });
    }
}


async function getPeople_lambda(event, context, callback) {
    try {
        const personId = event.pathParameters.id;
        const data = await fetchData(`people/${personId}`);

        // Crear una instancia de la clase Person con los datos de la API
        const person = new People(data);
        // Traducción de los nombres de las propiedades al español
        const datosEnEspañol = person.traducirAlEspañol();

        callback(null,{
            statusCode: 200,
            body: JSON.stringify(datosEnEspañol),
        })
    } catch (error) {
        callback(null,{
            statusCode: 500,
            body: JSON.stringify({error: 'Error al obtener datos desde la API de Star Wars' })
        })
    }
}

module.exports = {
    getPeople,
    getPeople_lambda
};
