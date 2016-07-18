var express = require('express');
var app = express();
var uuid = require('uuid');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var golfers = require('./golfers');
var groups = require('./groups');
var golfcourse = require('./golfcourse');

app.use(jsonParser);
app.use('/golfers', golfers);
app.use('/groups', groups);
app.use('/golfcourse', golfcourse);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
});

app.get('/default.css', function (req, res) {
  res.sendFile(__dirname + '/public/default.css')
});

app.get('/default.js', function (req, res) {
  res.sendFile(__dirname +  '/public/default.js')
});

app.get('/group_placeholder.png', function (req, res) {
  res.sendFile(__dirname + '/public/group_placeholder.png');
});

app.get('/plus_placeholder.png', function (req, res) {
  res.sendFile(__dirname + '/public/plus_placeholder.png');
});

app.listen(8080)
