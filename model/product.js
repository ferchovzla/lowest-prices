'use strict'
// Load mongoose module
var mongoose =  require('mongoose');
// use the Schema
var Schema = mongoose.Schema;
// Create the schema objet and attributes
var ProductSchema = Schema({
    name: String,
    code: { type: String, unique: true },
    price: Decimal128,
    temp_price: Decimal128,
    currency: String,
    begin_promotion_date: Date,
    end_promotion_date: Date,
    weight: Decimal128,
    unit: String,
    rate: Decimal128,	
    enabled: Boolean,
    category: String, 
    image: String
});
// Export the model for use it
module.exports = mongoose.model('User', ProductSchema);