var express = require('express');
var router = express.Router();
var Stocks = require('./../Schemas/stocks');
const core = require('./../functions/functions');


router.get('/', function (req, res, next) {

  // var data = {
  //   Symbol: "PIH",
  //   Name: "1347 Property Insurance Holdings, Inc.",
  //   MarketCap: 42903835.2,
  //   Sector: "Finance",
  //   Industry: "Property-Casualty Insurers"
  // };

  // console.log(data);
  // core.saveStock(data).then(function (stock) {
  //   console.log(stock);
  //   return res.json(stock);
  // }, function (error) {
  //   res.json(error);
  // });


});


router.get('/getStocks', function (req, res, next) {

  var data = {
    search : req.query.search
  }; 
  
  core.getStocks(data).then(function (stocks) {
    res.json(stocks);
  }, function (error) {
    res.json(error);
  });

});

router.get('/getPrice', function (req, res, next) {

  core.getPrices().then(function (prices) {
    res.json(prices);
  }, function (error) {
    res.json(error);
  });

});

module.exports = router;
