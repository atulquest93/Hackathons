const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Prices = new Schema({
    date : Date,
    symbol : String,
    open : Number,
    close : Number,
    low : Number,
    high : Number,
    volume : Number
});

module.exports = mongoose.model('Prices', Prices, 'Prices');