var breweriesData = require('../data/breweries-data.json');

module.exports.breweriesGetAll = function(req, res) {
  console.log('GET the breweries');
  res
    .status(200)
    .send( breweriesData );
  };

module.exports.breweriesGetOne = function(req, res) {
  var breweryId = req.params.breweryId;
  var thisBrewery = breweriesData[breweryId];
  console.log('GET the brewery ID', breweryId);
  res
    .status(200)
    .send( thisBrewery );
  };
