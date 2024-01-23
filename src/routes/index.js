const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController');
const StarshipsController = require('../controllers/StarshipsController');
const app = Router();

//root
app.get('/', (req, res) => {
    res.json(
        {
            "Title" : "Prueba tecnica Softtek - Richard Llacza"
        }
    );
})

app.get('/api/people/:id', PeopleController.getPeople);
app.get('/api/starships/:id', StarshipsController.getStarship);

module.exports = app;