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
    var response = JSON.parse(xhr.responseText);
    for (var i = 0; i < response.length; i++) {
      userProfile.appendChild(golferDisplay(response[i]));
    };


    swap('current', userPage, 'view');

  })
});


var loginAccess = document.getElementById('login-access');

loginAccess.addEventListener('click', function() {
  var userLogin = document.getElementById('login');

  swap('current', userLogin, 'view')

});


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
    for (var i = 0; i < response.length; i++) {
      userProfile.appendChild(golferDisplay(response[i]));
    };

    swap('current', userPage, 'view');

  })
});

var createButton = document.getElementById('create-button');

createButton.addEventListener('click', function () {
  var groupTitle = document.getElementById('group-title');
  var userEmail = document.getElementById('email');
  var firstName = document.getElementById('first-name');
  var lastName = document.getElementById('last-name');
  console.log(firstName.textContent + ' ' + lastName.textContent);

  var newGroup = {
    title: groupTitle.value,
    creator: userEmail.textContent,
    members: [' ' + firstName.textContent + ' ' + lastName.textContent]
  };

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/groups');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(newGroup));


})


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
    var searchResults = document.getElementById('new-search');
    clear(searchResults);
    var response = JSON.parse(xhr.responseText);
    for (var i = 0; i < response.length; i++) {
      searchResults.appendChild(golferSearch(response[i]));
    };


  })
});

function golferDisplay(data) {
  var nameDiv = document.createElement('div');
  var spanButton = document.createElement('span');
  var spanButtonTwo = document.createElement('span');
  var groupDiv = document.createElement('div');
  groupDiv.setAttribute('id', 'view-group');
  var viewGroup = document.createElement('button');
  viewGroup.setAttribute('class', 'btn btn-primary');
  viewGroup.setAttribute('type', 'button');
  viewGroup.setAttribute('id', 'golf-group');
  viewGroup.textContent = 'View Golf Groups';

  viewGroup.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/viewgroups');
    xhr.send();

    xhr.addEventListener('load', function () {
      var response = JSON.parse(xhr.responseText);
      var searchResults = document.getElementById('new-search');
      clear(searchResults);
      for (var i = 0; i < response.length; i++) {
        searchResults.appendChild(group(response[i]));
      }

    })
  });


  var buttonDiv = document.createElement('div');
  buttonDiv.setAttribute('id', 'view-buttons')
  var allGolfers = document.createElement('button');
  allGolfers.setAttribute('class', 'btn btn-primary');
  allGolfers.setAttribute('type', 'button');
  allGolfers.setAttribute('id', 'all-golfers');
  allGolfers.textContent = 'View All Golfers';

  allGolfers.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/allGolfers');
    xhr.send();

    xhr.addEventListener('load', function () {
      var response = JSON.parse(xhr.responseText);
      var searchResults = document.getElementById('new-search');
      clear(searchResults);
      for (var i = 0; i < response.length; i++) {
        searchResults.appendChild(golferSearch(response[i]));
      }

    })
  });


  var allCourses = document.createElement('button');
  allCourses.setAttribute('class', 'btn btn-primary');
  allCourses.setAttribute('type', 'button');
  allCourses.setAttribute('id', 'all-courses');
  allCourses.textContent = 'View Golf Courses';

  allCourses.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/allGolfers');
    xhr.send();

    xhr.addEventListener('load', function () {
      var response = JSON.parse(xhr.responseText);
      var searchResults = document.getElementById('new-search');
      clear(searchResults);
      for (var i = 0; i < response.length; i++) {
        searchResults.appendChild(golferSearch(response[i]));
      }

    })
  });

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
  spanButton.appendChild(allGolfers);
  spanButtonTwo.appendChild(allCourses);
  buttonDiv.appendChild(spanButton);
  buttonDiv.appendChild(buttonSpace);
  buttonDiv.appendChild(spanButtonTwo);
  containerHeader.appendChild(nameDiv);
  containerBody.appendChild(emailDiv);
  containerBody.appendChild(locationDiv);
  containerBody.appendChild(genderDiv);
  containerBody.appendChild(birthdayDiv);
  containerBody.appendChild(skillDiv);
  containerBody.appendChild(handicapDiv);
  containerBody.appendChild(buttonDiv);
  containerBody.appendChild(viewGroup);
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


function group(data) {
  var container = document.createElement('div');
  container.setAttribute('class', 'panel panel-default');
  container.setAttribute('id', 'container');
  var containerHeader = document.createElement('div');
  containerHeader.setAttribute('class', 'panel-heading text-center');
  var containerBody = document.createElement('div');
  containerBody.setAttribute('class', 'panel-body text-left');
  var title = document.createElement('div');
  title.textContent = data.title;
  title.setAttribute('class', 'h3');
  var members = document.createElement('div');
  members.textContent = data.members;

  containerHeader.appendChild(title);
  containerBody.appendChild(members);

  container.appendChild(containerHeader);
  container.appendChild(containerBody);
  return container;
}



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
