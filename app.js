var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

app.use(jsonParser);

app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.get('/default.css', function (req, res) {
  res.sendFile(__dirname + '/default.css')
});

app.get('/default.js', function (req, res) {
  res.sendFile(__dirname +  '/default.js')
});

app.post('/user', function (req, res) {
  console.log(req.body);
  var match = [];

  golfers.forEach(function(person) {
    if (person.email == req.body.email) {
      if (person.password == req.body.password) {
        match.push(person);
      }
    }
  });
  res.send(match)
});

var golfers = [
  {
    firstName: 'Bob',
    lastName: 'Barker',
    email: 'bbarker@gmail.com',
    password: 'thepriceisright',
    city: 'Pitt Meadows',
    state: 'British Columbia',
    zip: '92037',
    gender: 'male',
    birthday: 'December 12, 1923',
    skill: 'Professional',
    handicap: '3',
  },
  {
    firstName: 'Adam',
    lastName: 'Sandler',
    email: 'asandler@gmail.com',
    password: 'thepriceiswrong',
    city: 'Pitt Meadows',
    state: 'British Columbia',
    zip: '92037',
    gender: 'male',
    birthday: 'September 9, 1966',
    skill: 'Intermediate',
    handicap: '12',
  }
];



app.listen(8080)
