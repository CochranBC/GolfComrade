var express = require('express');
var golfcourse = express.Router();

golfcourse.post('/view', function (req, res) {
  res.send(golfCourses);
})

var golfCourses = [
  {
    name: 'Rancho San Joaquin',
    par: '5',
    address: 'One Ethel Coplen Way',
    city: 'Irvine',
    state: 'CA',
    zip: '92612',
    phone: '949-786-5522',
  }
]

module.exports = golfcourse;
