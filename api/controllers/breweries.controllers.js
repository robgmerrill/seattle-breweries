var dbconn = require('../data/dbconnection.js');
var ObjectId = require('mongodb').ObjectId;
var breweriesData = require('../data/breweries-data.json');

module.exports.breweriesGetAll = function(req, res) {
  
  var db = dbconn.get();
  var collection = db.collection('brewery'); // check grammar on brewery

   var offset = 0;
  var count = 5;

  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }

  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }

  collection
  .find()
  .skip(offset)
  .limit(count)
  .toArray(function(err, docs) {
    console.log('Breweries found', docs);
    res
      .status(200)
      .json(docs);    
  });
  };

module.exports.breweriesGetOne = function(req, res) {
  var db = dbconn.get();
  var collection = db.collection('brewery'); // check grammar on brewery

  var breweryId = req.params.breweryId;
  console.log('GET the brewery ID', breweryId);

  collection
    .findOne({
      _id : ObjectId(breweryId)
    }, function(err, doc) {
    res
    .status(200)
    .json( doc );      
    });
  };

module.exports.breweriesAddOne = function(req, res) {
  console.log("POST new hotel");
  console.log(req.body);
  res
    .status(200)
    .json(req.body);
};
