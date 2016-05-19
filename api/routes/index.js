var express = require('express');
var router = express.Router();

var ctrlBreweries = require('../controllers/breweries.controllers.js');

router
  .route('/breweries')
  .get(ctrlBreweries.breweriesGetAll);

router
  .route('/breweries/:breweryId')
  .get(ctrlBreweries.breweriesGetOne);

module.exports = router;

