var breweriesData = require('../data/breweries-data.json');

module.exports.breweriesGetAll = function(req, res) {
  console.log('GET the breweries');
      res
        .status(200)
        .send( breweriesData );
  };
