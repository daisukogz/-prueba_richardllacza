const express = require('express');
const app = express();
const morgan = require('morgan');
const {process_params} = require("express/lib/router");
//Routes
app.use(require('./routes/index'));

//inicial

app.set('port', process.env.PORT || 3000);
app.set('json spaces' , 2)

//mid
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// test listening
app.listen(app.get('port'),()=>{
    console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
});

module.exports = app;