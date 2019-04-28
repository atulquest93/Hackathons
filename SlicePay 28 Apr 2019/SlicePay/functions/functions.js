var mongoose = require('mongoose');
var Stocks = require('./../Schemas/stocks');
var Prices = require('./../Schemas/prices');

exports.getStocks = getStocks;
exports.getPrices = getPrices;
///exports.saveStock = saveStock;

function getStocks(data) {

  return new Promise( function (resolve, reject) {
    var query = Stocks.find({
      Name: new RegExp(data.search, 'i')
    }).limit(20);

    query.exec(function(err, stock) {
        if (err){
            return reject({err : 'Error while fetching Stocks'});
        }
        return resolve(stock);
     });

  });
}

function getPrices(){
  return new Promise(function(resolve, reject){
      var query = Prices.find({}).limit(20);;
      query.exec(function(err, price){
        if(err){
          return reject({err : 'Error while fetching Prices'});
        }
        return resolve(price);
      });
  });
}

// function saveStock(data) {
//     return new Promise( function (resolve, reject) {
//       var stock = new Stocks(data);
//       console.log(Stocks);
//       stock.save(function(err) {
//           console.log('err',err);
//           if (err){
//               return reject({err : 'Error while saving new user'});
//           }
//           return resolve(data);
//       });
//     });
// }