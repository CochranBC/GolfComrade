var start = 1914;
var end = 2014;
var yearOption = document.getElementById('new-year');
for (var s = start; s <= end; s++) {
  var year = [s];
  var option = document.createElement('option')
  option.textContent = year;
  option.value = year;
  yearOption.appendChild(option)

};

var homePage = document.getElementById('login');
window.onload = swap('current', homePage, 'view')

var createUser = document.getElementById('create-user');
createUser.addEventListener('click', function() {
  var newUser = document.getElementById('new-user');

  swap('current', newUser, 'view')
});

var loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', function() {
  var email = document.getElementById('input-email');
  var password = document.getElementById('input-password');
  var person = {};
  person.email = email.value;
  person.password = password.value;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/golfers/login');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(person));
  xhr.addEventListener('load', function() {
    var userPage = document.getElementById('user-page');
    var userProfile = document.getElementById('user-profile');
    var response = JSON.parse(xhr.responseText);
    for (var i = 0; i < response.length; i++) {
      userProfile.appendChild(golferDisplay(response[i]));
    };
    swap('current', userPage, 'view');
    getAllGroups(function (groups) {
      var groupsList = document.getElementById('groups-list');
      showAllGroups(groupsList, groups)
    })
  })
});


var createUser = document.getElementById('create-account');
createUser.addEventListener('click', function() {
  var first = document.getElementById('new-first-name');
  var last = document.getElementById('new-last-name');
  var email = document.getElementById('new-email');
  var password = document.getElementById('new-password');
  var city = document.getElementById('new-city');
  var state = document.getElementById('new-state');
  var zip = document.getElementById('new-zip');
  var gender = document.getElementById('new-gender');
  var month = document.getElementById('new-month');
  var day = document.getElementById('new-day');
  var year = document.getElementById('new-year');
  var skill = document.getElementById('new-skill');
  var handicap = document.getElementById('new-handicap')
  var user = {};
  user.firstName = first.value;
  user.lastName = last.value;
  user.email = email.value;
  user.password = password.value;
  user.city = city.value;
  user.state = state.value;
  user.zip = zip.value;
  user.gender = gender.value;
  user.birthMonth = month.value;
  user.birthDay = day.value;
  user.birthYear = year.value;
  user.skill = skill.value;
  user.handicap = handicap.value;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/golfers/new');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(user));
  xhr.addEventListener('load', function() {
    var userPage = document.getElementById('user-page');
    var userProfile = document.getElementById('user-profile');
    var response = JSON.parse(xhr.responseText);
    userProfile.appendChild(golferDisplay(response));
    swap('current', userPage, 'view');
  })
});


var searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function() {
  var term = document.getElementById('term');
  var searchZip = {};
  searchZip.zip = term.value
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/golfers/search');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(searchZip));
  xhr.addEventListener('load', function() {
    var searchResults = document.getElementById('dashboard');
    clear(searchResults);
    var response = JSON.parse(xhr.responseText);
    for (var i = 0; i < response.length; i++) {
      searchResults.appendChild(golferSearch(response[i]));
    };
  })
});

var allGolfers = document.getElementById('all-golfers');
allGolfers.addEventListener('click', function () {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/golfers/view');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send();
  xhr.addEventListener('load', function () {
    var response = JSON.parse(xhr.responseText);
    var searchResults = document.getElementById('dashboard');
    clear(searchResults);
    for (var i = 0; i < response.length; i++) {
      searchResults.appendChild(golferSearch(response[i]));
    }
  })
});

var allCourses = document.getElementById('all-courses');
allCourses.addEventListener('click', function () {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/golfcourse/view');
  xhr.send();
  xhr.addEventListener('load', function () {
    var response = JSON.parse(xhr.responseText);
    var searchResults = document.getElementById('dashboard');
    clear(searchResults);
    for (var i = 0; i < response.length; i++) {
      searchResults.appendChild(golferCourse(response[i]));
    }
  })
});

var viewGroup = document.getElementById('golf-group');
viewGroup.addEventListener('click', function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/groups/view');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send();
  xhr.addEventListener('load', function () {
    showGolfGroups(JSON.parse(xhr.responseText))
  })
});



function golfGroups() {

}

function golferDisplay(data) {
  var nameDiv = document.createElement('div');
  var container = document.createElement('div');
  container.setAttribute('class', 'panel panel-default');
  container.setAttribute('id', 'container');
  var buttonContainer = document.createElement('div');
  buttonContainer.setAttribute('class', 'panel panel-default');
  buttonContainer.setAttribute('id', 'container');
  var containerHeader = document.createElement('div');
  containerHeader.setAttribute('class', 'panel-heading text-center');
  var containerBody = document.createElement('div');
  containerBody.setAttribute('class', 'panel-body text-left');
  var locationDiv = document.createElement('div');
  locationDiv.textContent = 'Residence: ';
  var genderDiv = document.createElement('div');
  genderDiv.textContent = 'Gender: ';
  var birthdayDiv = document.createElement('div');
  birthdayDiv.textContent = 'Birth Date: ';
  var skillDiv = document.createElement('div');
  skillDiv.textContent = 'Skill Level: ';
  var handicapDiv = document.createElement('div');
  handicapDiv.textContent = 'Handicap: ';
  var forename = document.createElement('span');
  forename.setAttribute('class', 'h3');
  forename.setAttribute('id', 'first-name');
  forename.textContent = data.firstName;
  var surname = document.createElement('span');
  surname.setAttribute('class', 'h3');
  surname.setAttribute('id', 'last-name');
  surname.textContent = data.lastName;
  var town = document.createElement('span');
  town.textContent = data.city;
  var comma = document.createElement('span');
  comma.textContent = ', ';
  var commaTwo = document.createElement('span');
  commaTwo.textContent = ', ';
  var region = document.createElement('span');
  region.textContent = data.state;
  var zipcode = document.createElement('span');
  zipcode.textContent = data.zip;
  var sex = document.createElement('span');
  sex.textContent = data.gender;
  var monthOfBirth = document.createElement('span');
  monthOfBirth.textContent = data.birthMonth;
  var buttonSpace = document.createElement('span');
  buttonSpace.innerHTML = '&nbsp';
  var space = document.createElement('span');
  space.innerHTML = '&nbsp';
  var spaceTwo = document.createElement('span');
  spaceTwo.innerHTML = '&nbsp';
  var spaceThree = document.createElement('span');
  spaceThree.innerHTML = '&nbsp';
  var dayOfBirth = document.createElement('span');
  dayOfBirth.textContent = data.birthDay;
  var yearOfBirth = document.createElement('span');
  yearOfBirth.textContent = data.birthYear;
  var competence = document.createElement('span');
  competence.textContent = data.skill;
  var golfHandicap = document.createElement('span');
  golfHandicap.textContent = data.handicap;
  var emailDiv = document.createElement('div');
  emailDiv.textContent = 'Email: ';
  var userEmail = document.createElement('span');
  userEmail.setAttribute('id', 'email');
  userEmail.textContent = data.email;
  nameDiv.appendChild(forename);
  nameDiv.appendChild(space);
  nameDiv.appendChild(surname);
  locationDiv.appendChild(town);
  locationDiv.appendChild(comma);
  locationDiv.appendChild(region);
  locationDiv.appendChild(spaceTwo);
  locationDiv.appendChild(zipcode);
  genderDiv.appendChild(sex);
  emailDiv.appendChild(userEmail);
  birthdayDiv.appendChild(monthOfBirth);
  birthdayDiv.appendChild(spaceThree);
  birthdayDiv.appendChild(dayOfBirth);
  birthdayDiv.appendChild(commaTwo);
  birthdayDiv.appendChild(yearOfBirth);
  skillDiv.appendChild(competence);
  handicapDiv.appendChild(golfHandicap);
  containerHeader.appendChild(nameDiv);
  containerBody.appendChild(emailDiv);
  containerBody.appendChild(locationDiv);
  containerBody.appendChild(genderDiv);
  containerBody.appendChild(birthdayDiv);
  containerBody.appendChild(skillDiv);
  containerBody.appendChild(handicapDiv);
  container.appendChild(containerHeader);
  container.appendChild(containerBody);
  return container;
};

function golferSearch(data) {
  var nameDiv = document.createElement('div');
  var container = document.createElement('div');
  container.setAttribute('class', 'panel panel-default');
  container.setAttribute('id', 'container');
  var containerHeader = document.createElement('div');
  containerHeader.setAttribute('class', 'panel-heading text-center');
  var containerBody = document.createElement('div');
  containerBody.setAttribute('class', 'panel-body text-left');
  var locationDiv = document.createElement('div');
  locationDiv.textContent = 'Residence: ';
  var genderDiv = document.createElement('div');
  genderDiv.textContent = 'Gender: ';
  var birthdayDiv = document.createElement('div');
  birthdayDiv.textContent = 'Birth Date: ';
  var skillDiv = document.createElement('div');
  skillDiv.textContent = 'Skill Level: ';
  var handicapDiv = document.createElement('div');
  handicapDiv.textContent = 'Handicap: ';
  var forename = document.createElement('span');
  forename.setAttribute('class', 'h3');
  forename.textContent = data.firstName;
  var surname = document.createElement('span');
  surname.setAttribute('class', 'h3')
  surname.textContent = data.lastName;
  var town = document.createElement('span');
  town.textContent = data.city;
  var comma = document.createElement('span');
  comma.textContent = ', ';
  var commaTwo = document.createElement('span');
  commaTwo.textContent = ', ';
  var region = document.createElement('span');
  region.textContent = data.state;
  var zipcode = document.createElement('span');
  zipcode.textContent = data.zip;
  var sex = document.createElement('span');
  sex.textContent = data.gender;
  var monthOfBirth = document.createElement('span');
  monthOfBirth.textContent = data.birthMonth;
  var space = document.createElement('span');
  space.innerHTML = '&nbsp';
  var spaceTwo = document.createElement('span');
  spaceTwo.innerHTML = '&nbsp';
  var spaceThree = document.createElement('span');
  spaceThree.innerHTML = '&nbsp';
  var dayOfBirth = document.createElement('span');
  dayOfBirth.textContent = data.birthDay;
  var yearOfBirth = document.createElement('span');
  yearOfBirth.textContent = data.birthYear;
  var competence = document.createElement('span');
  competence.textContent = data.skill;
  var golfHandicap = document.createElement('span');
  golfHandicap.textContent = data.handicap;
  nameDiv.appendChild(forename);
  nameDiv.appendChild(space);
  nameDiv.appendChild(surname);
  locationDiv.appendChild(town);
  locationDiv.appendChild(comma);
  locationDiv.appendChild(region);
  locationDiv.appendChild(spaceTwo);
  locationDiv.appendChild(zipcode);
  genderDiv.appendChild(sex);
  birthdayDiv.appendChild(monthOfBirth);
  birthdayDiv.appendChild(spaceThree);
  birthdayDiv.appendChild(dayOfBirth);
  birthdayDiv.appendChild(commaTwo);
  birthdayDiv.appendChild(yearOfBirth);
  skillDiv.appendChild(competence);
  handicapDiv.appendChild(golfHandicap);
  containerHeader.appendChild(nameDiv);
  containerBody.appendChild(locationDiv);
  containerBody.appendChild(genderDiv);
  containerBody.appendChild(birthdayDiv);
  containerBody.appendChild(skillDiv);
  containerBody.appendChild(handicapDiv);
  container.appendChild(containerHeader);
  container.appendChild(containerBody);
  return container;
};

function golferCourse(data) {
  var container = document.createElement('div');
  container.setAttribute('class', 'panel panel-default');
  container.setAttribute('id', 'container');
  var containerHeader = document.createElement('div');
  containerHeader.setAttribute('class', 'panel-heading text-center');
  var containerBody = document.createElement('div');
  containerBody.setAttribute('class', 'panel-body text-left');
  var locationDiv = document.createElement('div');
  locationDiv.textContent = 'Address: ';
  var nameDiv = document.createElement('h3');
  nameDiv.textContent = data.name;
  var parDiv = document.createElement('div');
  parDiv.textContent = 'Par: ';
  var par = document.createElement('span');
  par.textContent = data.par;
  var phoneDiv = document.createElement('div');
  phoneDiv.textContent = 'Phone Number: ';
  var phoneSpan = document.createElement('span');
  phoneSpan.textContent = data.phone;
  var addressDiv = document.createElement('div');
  addressDiv.textContent = data.address;
  addressTwoDiv = document.createElement('div');
  var town = document.createElement('span');
  town.textContent = data.city;
  var comma = document.createElement('span');
  comma.textContent = ', ';
  var commaTwo = document.createElement('span');
  commaTwo.textContent = ', ';
  var region = document.createElement('span');
  region.textContent = data.state;
  var zipcode = document.createElement('span');
  zipcode.textContent = data.zip;
  var space = document.createElement('span');
  space.innerHTML = '&nbsp';
  locationDiv.appendChild(addressDiv);
  addressTwoDiv.appendChild(town);
  addressTwoDiv.appendChild(comma);
  addressTwoDiv.appendChild(region);
  addressTwoDiv.appendChild(space);
  addressTwoDiv.appendChild(zipcode);
  locationDiv.appendChild(addressTwoDiv);
  parDiv.appendChild(par);
  phoneDiv.appendChild(phoneSpan);
  containerHeader.appendChild(nameDiv);
  containerBody.appendChild(parDiv);
  containerBody.appendChild(locationDiv);
  containerBody.appendChild(phoneDiv);
  container.appendChild(containerHeader);
  container.appendChild(containerBody);
  return container;
};

function group(data) {
  var groupItem = element('div');
  var groupPanel = element('div');
  groupPanel.setAttribute('class', 'col-md-2 col-xs-2 panel panel-default');
  var groupFooter = element('div');
  groupFooter.setAttribute('class', 'panel-footer');
  groupFooter.textContent = data.title;
  var groupHeader = element('div');
  groupHeader.setAttribute('class', 'panel-heading');
  groupHeader.textContent = data.members.length + '/' + data.capacity;
  var groupBody = element('div');
  groupBody.setAttribute('class', 'panel-body');
  var img = element('img');
  img.setAttribute('src', 'group_placeholder.png');

  groupBody.appendChild(img);
  groupPanel.appendChild(groupHeader);
  groupPanel.appendChild(groupBody);
  groupPanel.appendChild(groupFooter);
  groupItem.appendChild(groupPanel);

  return groupItem;
}

function getAllGroups(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/groups/view');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send();
  xhr.addEventListener('load', function () {
    callback(JSON.parse(xhr.responseText))
  })
};

function showAllGroups(target, groups) {
  for (var i = 0; i < groups.length; i++) {
    target.appendChild(group(groups[i]));
  }
}

function showGolfGroups(groupData) {
  var searchResults = document.getElementById('dashboard');
  clear(searchResults);
  for (var i = 0; i < groupData.length; i++) {
    searchResults.appendChild(group(groupData[i]));
  }
};

function clear(area) {
  while(area.firstChild) {
    area.removeChild(area.firstChild)
  }
};

function swap(current, next, location) {
  var old = document.getElementsByClassName(current)[0];
  old.classList.remove('current');
  old.classList.add('hide');
  var theLocation = document.getElementById(location);
  theLocation.appendChild(next);
  next.classList.add('current');
  next.classList.remove('hide');
};

function element(tagName) {
  return document.createElement(tagName);
}
