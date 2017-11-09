var express = require('express');

var app = express();
 
 
app.get('/', function(req, res) {
  res.json({title: 'Welcome to Express App'});
});
 
 
app.listen(3000);