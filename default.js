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


var homePage = document.getElementById('home');

window.onload = swap('current', homePage, 'view')


var createUser = document.getElementById('create-user');

createUser.addEventListener('click', function() {
  var newUser = document.getElementById('new-user');

  swap('current', newUser, 'view')
});


var loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', function() {
  var emailInput = document.getElementById('input-email');
  var passwordInput = document.getElementById('input-password');
  var person = {};
  person.email = emailInput.value;
  person.password = passwordInput.value;

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/user');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(person));

  xhr.addEventListener('load', function() {
    var userPage = document.getElementById('user-page');
    var userProfile = document.getElementById('user-profile');
    var response = JSON.parse(xhr.responseText);
    var nameDiv = document.createElement('div');
    var container = document.createElement('div');
    container.setAttribute('class', 'panel panel-default');
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
    forename.setAttribute('id', 'space');
    forename.textContent = response[0].firstName;
    var surname = document.createElement('span');
    surname.setAttribute('id', 'space')
    surname.textContent = response[0].lastName;
    var town = document.createElement('span');
    town.textContent = response[0].city;
    var comma = document.createElement('span');
    comma.textContent = ', ';
    var commaTwo = document.createElement('span');
    commaTwo.textContent = ', ';
    var region = document.createElement('span');
    region.textContent = response[0].state;
    var zipcode = document.createElement('span');
    zipcode.textContent = response[0].zip;
    var sex = document.createElement('span');
    sex.textContent = response[0].gender;
    var monthOfBirth = document.createElement('span');
    monthOfBirth.textContent = response[0].birthMonth;
    var space = document.createElement('span');
    space.innerHTML = '&nbsp';
    var spaceTwo = document.createElement('span');
    spaceTwo.innerHTML = '&nbsp';
    var spaceThree = document.createElement('span');
    spaceThree.innerHTML = '&nbsp';
    var dayOfBirth = document.createElement('span');
    dayOfBirth.textContent = response[0].birthDay;
    var yearOfBirth = document.createElement('span');
    yearOfBirth.textContent = response[0].birthYear;
    var competence = document.createElement('span');
    competence.textContent = response[0].skill;
    var golfHandicap = document.createElement('span');
    golfHandicap.textContent = response[0].handicap;

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
    userProfile.appendChild(container);

    swap('current', userPage, 'view');

  })
});


var loginAccess = document.getElementById('login-access');

loginAccess.addEventListener('click', function() {
  var userLogin = document.getElementById('login');

  swap('current', userLogin, 'view')

});


function swap(current, next, location) {
  var old = document.getElementsByClassName(current)[0];
  old.classList.remove('current');
  old.classList.add('hide');

  var theLocation = document.getElementById(location);
  theLocation.appendChild(next);
  next.classList.add('current');
  next.classList.remove('hide');
};


var createUser = document.getElementById('create-account');

createUser.addEventListener('click', function() {
  var newFirst = document.getElementById('new-first-name');
  var newLast = document.getElementById('new-last-name');
  var newEmail = document.getElementById('new-email');
  var newPassword = document.getElementById('new-password');
  var newCity = document.getElementById('new-city');
  var newState = document.getElementById('new-state');
  var newZip = document.getElementById('new-zip');
  var newGender = document.getElementById('new-gender');
  var birthdayMonth = document.getElementById('new-month');
  var birthdayDay = document.getElementById('new-day');
  var birthdayYear = document.getElementById('new-year');
  var newSkill = document.getElementById('new-skill');
  var newHandicap = document.getElementById('new-handicap')
  var user = {};
  user.firstName = newFirst.value;
  user.lastName = newLast.value;
  user.email = newEmail.value;
  user.password = newPassword.value;
  user.city = newCity.value;
  user.state = newState.value;
  user.zip = newZip.value;
  user.gender = newGender.value;
  user.birthMonth = birthdayMonth.value;
  user.birthDay = birthdayDay.value;
  user.birthYear = birthdayYear.value;
  user.skill = newSkill.value;
  user.handicap = newHandicap.value;

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/newGolfer');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(user));

  xhr.addEventListener('load', function() {
    var userPage = document.getElementById('user-page');
    var userProfile = document.getElementById('user-profile');
    var response = JSON.parse(xhr.responseText);
    var nameDiv = document.createElement('div');
    var container = document.createElement('div');
    container.setAttribute('class', 'panel panel-default');
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
    forename.setAttribute('id', 'space');
    forename.textContent = response[0].firstName;
    var surname = document.createElement('span');
    surname.setAttribute('id', 'space')
    surname.textContent = response[0].lastName;
    var town = document.createElement('span');
    town.textContent = response[0].city;
    var comma = document.createElement('span');
    comma.textContent = ', ';
    var commaTwo = document.createElement('span');
    commaTwo.textContent = ', ';
    var region = document.createElement('span');
    region.textContent = response[0].state;
    var zipcode = document.createElement('span');
    zipcode.textContent = response[0].zip;
    var sex = document.createElement('span');
    sex.textContent = response[0].gender;
    var monthOfBirth = document.createElement('span');
    monthOfBirth.textContent = response[0].birthMonth;
    var space = document.createElement('span');
    space.innerHTML = '&nbsp';
    var spaceTwo = document.createElement('span');
    spaceTwo.innerHTML = '&nbsp';
    var spaceThree = document.createElement('span');
    spaceThree.innerHTML = '&nbsp';
    var dayOfBirth = document.createElement('span');
    dayOfBirth.textContent = response[0].birthDay;
    var yearOfBirth = document.createElement('span');
    yearOfBirth.textContent = response[0].birthYear;
    var competence = document.createElement('span');
    competence.textContent = response[0].skill;
    var golfHandicap = document.createElement('span');
    golfHandicap.textContent = response[0].handicap;

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
    userProfile.appendChild(container);

    swap('current', userPage, 'view');

  })
});


var searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', function() {
  var term = document.getElementById('term');
  var searchZip = {};
  searchZip.zip = term.value


  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/searchZip');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(searchZip));

  xhr.addEventListener('load', function() {
    var searchResults = document.getElementById('search-results');
    var response = JSON.parse(xhr.responseText);
    var nameDiv = document.createElement('div');
    var container = document.createElement('div');
    container.setAttribute('class', 'panel panel-default');
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
    forename.setAttribute('id', 'space');
    forename.textContent = response[0].firstName;
    var surname = document.createElement('span');
    surname.setAttribute('id', 'space')
    surname.textContent = response[0].lastName;
    var town = document.createElement('span');
    town.textContent = response[0].city;
    var comma = document.createElement('span');
    comma.textContent = ', ';
    var commaTwo = document.createElement('span');
    commaTwo.textContent = ', ';
    var region = document.createElement('span');
    region.textContent = response[0].state;
    var zipcode = document.createElement('span');
    zipcode.textContent = response[0].zip;
    var sex = document.createElement('span');
    sex.textContent = response[0].gender;
    var monthOfBirth = document.createElement('span');
    monthOfBirth.textContent = response[0].birthMonth;
    var space = document.createElement('span');
    space.innerHTML = '&nbsp';
    var spaceTwo = document.createElement('span');
    spaceTwo.innerHTML = '&nbsp';
    var spaceThree = document.createElement('span');
    spaceThree.innerHTML = '&nbsp';
    var dayOfBirth = document.createElement('span');
    dayOfBirth.textContent = response[0].birthDay;
    var yearOfBirth = document.createElement('span');
    yearOfBirth.textContent = response[0].birthYear;
    var competence = document.createElement('span');
    competence.textContent = response[0].skill;
    var golfHandicap = document.createElement('span');
    golfHandicap.textContent = response[0].handicap;

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
    searchResults.appendChild(container);


  })
});
