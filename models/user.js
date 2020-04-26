'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var UserSchema = Schema({
    name: String,
    lastname: String,
    username: String,
    email: { 
        type: String, 
        unique: true 
    }
    password: String,
    role: String, 
    image: String,
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('User', UserSchema);