var express = require('express');
var app = express(); // extantiate express
var path = require('path');

app.set('port', 3000);

// 3 paramenters req, res, next()
// order of middleware is important
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

// middleware will serve up all the static content in the public directory
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(req, res) {
//   console.log('GET the homepage');
//   res
//     .status(200)
//     .sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// route /json
app.get('/json', function(req, res) {
  console.log('GET the json');
  res
    .status(200)
    .send( {"jsonData": true} );
});

// route /file
app.get('/file', function(req, res) {
  console.log('GET the file');
  res
    // status of 200 means ok
    .status(200)
    // required "path" to use .sendFile function. 
    // formula: (path.join(__dirname, 'file'))
    .sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

