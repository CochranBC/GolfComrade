var express = require('express');
var golfers = express.Router();

golfers.post('/login', function (req, res) {
  var match = [];

  golfer.forEach(function(person) {
    if (person.email == req.body.email) {
      if (person.password == req.body.password) {
        match.push(person);
      }
    }
  });
  res.send(match)
});

golfers.post('/view', function (req, res) {
  res.send(golfer);
});

golfers.post('/search', function (req, res) {
  var zipMatch = [];
  for (var i = 0; i < golfer.length; i++) {
    var offset = golfer[i].zip.indexOf(req.body.zip);
    if (offset === -1) {
    } else {
      zipMatch.push(golfer[i])
    }
  }
  res.send(zipMatch);
});

golfers.post('/new', function (req, res) {
  var newGolfer = {};
  newGolfer.firstName = req.body.firstName;
  newGolfer.lastName = req.body.lastName;
  newGolfer.email = req.body.email;
  newGolfer.password = req.body.password;
  newGolfer.city = req.body.city;
  newGolfer.state = req.body.state;
  newGolfer.zip = req.body.zip;
  newGolfer.gender = req.body.gender;
  newGolfer.birthMonth = req.body.birthMonth;
  newGolfer.birthDay = req.body.birthDay;
  newGolfer.birthYear = req.body.birthYear;
  newGolfer.skill = req.body.skill;
  newGolfer.handicap = req.body.handicap;
  golfer.push(newGolfer);
  var newProfile = [];
  golfer.forEach(function(user) {
    if (user.email == req.body.email) {
      newProfile.push(user);
    }
  });
  res.send(newProfile[0]);
});


var golfer = [
  {
    firstName: 'Bob',
    lastName: 'Barker',
    email: 'bbarker@gmail.com',
    password: 'thepriceisright',
    city: 'Pitt Meadows',
    state: 'British Columbia',
    zip: '92037',
    gender: 'Male',
    birthMonth: 'December',
    birthDay: '12',
    birthYear: '1923',
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
    gender: 'Male',
    birthMonth: 'September',
    birthDay: '9',
    birthYear: '1966',
    skill: 'Intermediate',
    handicap: '12',
  },
  {
    firstName: 'Brian',
    lastName: 'Cochran',
    email: 'bcochran@gmail.com',
    password: 'golf',
    city: 'Irvine',
    state: 'CA',
    zip: '92602',
    gender: 'Male',
    birthMonth: 'April',
    birthDay: '9',
    birthYear: '1985',
    skill: 'Intermediate',
    handicap: '12',
  }
];


module.exports = golfers;
