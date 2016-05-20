var breweriesData = require('../data/breweries-data.json');

module.exports.breweriesGetAll = function(req, res) {
  console.log('GET the breweries');
  console.log(req.query);

  var offset = 0;
  var count = 5;

  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }

  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }

  var returnData = breweriesData.slice(offset, offset+count);

  res
    .status(200)
    .send( returnData );
  };

module.exports.breweriesGetOne = function(req, res) {
  var breweryId = req.params.breweryId;
  var thisBrewery = breweriesData[breweryId];
  console.log('GET the brewery ID', breweryId);
  res
    .status(200)
    .send( thisBrewery );
  };

module.exports.breweriesAddOne = function(req, res) {
  console.log("POST new hotel");
  console.log(req.body);
  res
    .status(200)
    .json(req.body);
};
