'use strict'
// Load mongoose module
const mongoose =  require('mongoose');
// use the Schema
const Schema = mongoose.Schema;
// Create the schema objet and attributes
let ServiceSchema = Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    address: { 
        type: String
    },
    city: { 
        type: String
    },
    country: { 
        type: String
    },
    phone: {
        type: String
    },
    phone2: {
        type: String
    }, 
    photo: {
        type: String
    },
    has_promotion: {
        type: Boolean
    },
    begin_promotion_date: {
        type: Date
    },
    end_promotion_date: {
        type: Date
    },  
    enabled: {
        type: Boolean
    },
    category: {
        type: String
    }, 
    image: {
        type: String
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    },

},  {
    collection: 'services'
    });
// Export the model for use it
module.exports = mongoose.model('Service', ServiceSchema);