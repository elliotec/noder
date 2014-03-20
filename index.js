var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({'enders_game': 'Orson Scott Card'});
});

var server = app.listen(3333, function() {
  console.log('Listening on port %d', server.address().port);
});
