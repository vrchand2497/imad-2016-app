var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/au1', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','au1.html'));
  
});
app.get('/a2', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','au2.html'));
});
app.get('/a3', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','au3.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

    
app.get('/ui/power.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'power.jpg'));

});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
