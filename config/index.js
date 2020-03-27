// Utilizar funcionalidades del Ecmascript 6
'use strict'
// Cargamos el módulo de mongoose para poder conectarnos a MongoDB
var mongoose = require('mongoose');
// *Cargamos el fichero app.js con la configuración de Express
var app = require('../app');
// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
var port = 3800;
// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;
// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect('mongodb://localhost:27017/market_products',  { useMongoClient: true})
    .then(() => {
        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log("La conexión a la base de datos market_products se ha realizado correctamente")
    
        // CREATE WEBSERVER WITH NODEJS
        app.listen(port, () => {
            console.log("servidor corriendo en http://localhost:3800");
        });
    })
    // Throw exception when can not connect
    .catch(err => console.log(err));
