var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    size: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
var pizza = new mongoose.model('Pizza', schema);
module.exports = pizza;