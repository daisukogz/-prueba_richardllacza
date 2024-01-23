// src/controllers/StarshipsController.js
const { fetchData } = require('../services/apiService');
const Starship = require('../models/Starship');

async function getStarship(req, res) {
    try {
        const starshipId = req.params.id;
        const data = await fetchData(`starships/${starshipId}`);

        // Crear una instancia de la clase Starship con los datos de la API
        const starship = new Starship(data);
        // Traducción de los nombres de las propiedades al español
        const datosEnEspañol = starship.traducirAlEspañol();

        res.json(datosEnEspañol);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos desde la API de Star Wars' });
    }
}

async function getStarship_lambda(event, context, callback) {
    try {
        //const data_lambda = JSON.parse(event.body);
        //console.log('Log:', event);
        //console.log('El ID es:', event.pathParameters.id);
        const starshipId = event.pathParameters.id;
        //console.log('Starship ID:', starshipId);
        //const starshipId = req.params.id;
        const data = await fetchData(`starships/${starshipId}`);

        // Crear una instancia de la clase Starship con los datos de la API
        const starship = new Starship(data);
        // Traducción de los nombres de las propiedades al español
        const datosEnEspañol = starship.traducirAlEspañol();

        //callback.json(datosEnEspañol);
        callback(null,{
            statusCode: 200,
            body: JSON.stringify(datosEnEspañol),
        })
    } catch (error) {
        console.error('Error al obtener datos:', error);
        callback(null,{
            statusCode: 500,
            body: JSON.stringify({error: 'Error al obtener datos desde la API de Star Wars' })
            //body: JSON.stringify({error: error})
        })
        //callback.status(500).json({ error: 'Error al obtener datos desde la API de Star Wars' });

    }
}

module.exports = {
    getStarship,
    getStarship_lambda,
};
