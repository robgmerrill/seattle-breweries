var express = require('express');
var router = express.Router();

var ctrlBreweries = require('../controllers/breweries.controllers.js');

router
  .route('/breweries')
  .get(ctrlBreweries.breweriesGetAll);

module.exports = router;

