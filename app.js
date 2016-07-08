var express = require('express');

var app = express();

var uuid = require('uuid');

var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

app.use(jsonParser);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.get('/default.css', function (req, res) {
  res.sendFile(__dirname + '/default.css')
});

app.get('/default.js', function (req, res) {
  res.sendFile(__dirname +  '/default.js')
});

app.post('/user', function (req, res) {
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

app.post('/allGolfers', function (req, res) {
  res.send(golfers);
});



app.post('/searchZip', function (req, res) {
  var zipMatch = [];
  for (var i = 0; i < golfers.length; i++) {
    var offset = golfers[i].zip.indexOf(req.body.zip);
    if (offset === -1) {
    } else {
      zipMatch.push(golfers[i])
    }
  }
  res.send(zipMatch);
});


app.post('/newGolfer', function (req, res) {
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
  golfers.push(newGolfer);

  var newProfile = [];
  golfers.forEach(function(user) {
    if (user.email == req.body.email) {
      newProfile.push(user);
    }
  });
  res.send(newProfile[0]);
});

app.post('/groups', function (req, res) {
  var newGroup = req.body;
  newGroup.id = uuid.v1();
  groups.push(newGroup);

  res.send(groups);

});

app.get('/viewgroups', function (req, res) {
  res.send(groups);
});

app.post('/addMember', function (req, res) {
  //Group Id
  var member = req.body.member;
  var groupId = req.body.id;
  var group = groups.find(function (group) {
    return group.id === groupId
  })
  group.members.push(member);

  res.send(groups);

  //Member name

})

app.post('/removeMember', function (req, res) {
  var member = req.body.member;
  var groupId = req.body.id;
  var group = groups.find(function (group) {
    return group.id === groupId
  })
  var start = group.members.indexOf(member);
  group.members.splice(start, 1);
  res.send(groups);
})

// var memberlist = members.join(', '); join array mdn

var groups = [
  {
    creator: 'bbarker@gmail.com',
    title: '49ers',
    members: ['Bob Barker', 'Adam Sandler'],
    id: '1111',
  },
]


var golfers = [
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



app.listen(8080)
