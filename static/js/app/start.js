var express = require('express');

var app = express();

app.use(express.static('public'));

app.set('view engine');

app.get('/', function(req, res) {
  res.render("index");
});

app.listen(3000, function (){
  console.log('listeninnng to this joint on port 3000')
});
