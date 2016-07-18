var express = require('express');
var groups = express.Router();
var uuid = require('uuid');

groups.post('/new', function (req, res) {
  var newGroup = req.body;
  newGroup.id = uuid.v1();
  group.push(newGroup);
  res.send(group);
});

groups.get('/view', function (req, res) {
  res.send(group);
});

groups.post('/addMember', function (req, res) {
  var member = req.body.member;
  var groupId = req.body.id;
  var team = group.find(function (team) {
    return team.id === groupId
  })
  team.members.push(member);
  res.send(group);
})

groups.post('/removeMember', function (req, res) {
  var member = req.body.member;
  var groupId = req.body.id;
  var team = group.find(function (team) {
    return team.id === groupId
  })
  var start = team.members.indexOf(member);
  team.members.splice(start, 1);
  if (team.members.length == 0) {
    var newStart = group.indexOf(team);
    group.splice(newStart, 1);
  }
  res.send(group);
})

var group = [
  {
    creator: 'bbarker@gmail.com',
    title: '49ers',
    members: ['Bob Barker', 'Adam Sandler'],
    capacity: 4,
    location: 'Irvine, CA',
    date: '07/13/16',
    id: '1111',
  },
  {
    creator: 'bcochran@gmail.com',
    title: 'Golf Club',
    members: ['Brian Cochran', 'Adam Sandler', 'Bob Barker'],
    capacity: 4,
    location: 'Irvine, CA',
    date: '07/13/16',
    id: '2222',
  },
]

module.exports = groups;
