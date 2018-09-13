'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    product_name: {
        type: String,
        default: "Desodorante"
    },
    description: {
        type: String,
        default:"Producto para que no apeste el ala"
    },
    //missed left last_name
        price: {
        type: String,
        default: "$5.990"
    },
    Created_date:{
        type: Date,
        default :Date.now

    },

});

//one o instead of 2
module.exports = mongoose.model('Users', UserSchema);