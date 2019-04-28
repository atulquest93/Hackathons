const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Stocks = new Schema({
    Symbol : String,
    Name : String,
    MarketCap : Number,
    Sector : String,
    Industry : String
});

module.exports = mongoose.model('Stocks', Stocks, 'Stocks');