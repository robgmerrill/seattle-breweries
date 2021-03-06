require('./api/data/dbconnection.js').open();
var express = require('express');
var app = express(); // extantiate express
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.set('port', 3000);

// 3 paramenters req, res, next()
// order of middleware is important
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

// middleware will serve up all the static content in the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

