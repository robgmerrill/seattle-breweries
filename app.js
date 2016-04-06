var express = require('express');
var app = express();

app.set('port', 3000);

app.listen(app.get('port'));
console.log('Magic happens on port ' + app.get('port'));
