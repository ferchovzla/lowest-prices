'use strict'
// Load mongoose module
const mongoose =  require('mongoose');
// use the Schema
const Schema = mongoose.Schema;
// Create the schema objet and attributes
let ProductSchema = Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    code: { 
        type: String, 
        unique: true 
    },
    price: {
        type: Decimal128
    }, 
    temp_price:{
        type: Decimal128
    },
    currency: {
        type: String
    },
    is_promotion: {
        type: Boolean
    },
    begin_promotion_date: {
        type: Date
    },
    end_promotion_date: {
        type: Date
    },
    weight: {
        type: Decimal128
    },
    unit: {
        type: String
    },
    rate: {
        type: Decimal128
    },  
    enabled: {
        type: Boolean
    },
    category: {
        type: String
    }, 
    image: {
        type: Decimal128
    },

},  {
    collection: 'products'
    });
// Export the model for use it
module.exports = mongoose.model('Product', ProductSchema);