var express = require('express');
var router = express.Router();

var ctrlBreweries = require('../controllers/breweries.controllers.js');

router
  .route('/breweries')
  .get(ctrlBreweries.breweriesGetAll);

router
  .route('/breweries/:breweryId')
  .get(ctrlBreweries.breweriesGetOne);

router
  .route('/breweries/new')
  .post(ctrlBreweries.breweriesAddOne);

module.exports = router;

