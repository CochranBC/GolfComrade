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
    var response = JSON.parse(xhr.responseText);
    var nameDiv = document.createElement('div');
    var locationDiv = document.createElement('div');
    locationDiv.textContent = 'Residence: '
    var genderDiv = document.createElement('div');
    genderDiv.textContent = 'Gender: '
    var birthdayDiv = document.createElement('div');
    birthdayDiv.textContent = 'Birth Date: '
    var skillDiv = document.createElement('div');
    skillDiv.textContent = 'Skill Level: '
    var handicapDiv = document.createElement('div');
    handicapDiv.textContent = 'Handicap: '
    var forename = document.createElement('span');
    forename.textContent = response[0].firstName;
    var surname = document.createElement('span');
    surname.textContent = response[0].lastName;
    var town = document.createElement('span');
    town.textContent = response[0].city;
    var comma = document.createElement('span');
    comma.textContent = ', ';
    var region = document.createElement('span');
    region.textContent = response[0].state;
    var zipcode = document.createElement('span');
    zipcode.textContent = response[0].zip;
    var sex = document.createElement('span');
    sex.textContent = response[0].gender;
    var dateOfBirth = document.createElement('span');
    dateOfBirth.textContent = response[0].birthday;
    var competence = document.createElement('span');
    competence.textContent = response[0].skill;
    var golfHandicap = document.createElement('span');
    golfHandicap.textContent = response[0].handicap;

    nameDiv.appendChild(forename);
    nameDiv.appendChild(surname);
    locationDiv.appendChild(town);
    locationDiv.appendChild(comma);
    locationDiv.appendChild(region);
    locationDiv.appendChild(zipcode);
    genderDiv.appendChild(sex);
    birthdayDiv.appendChild(dateOfBirth);
    skillDiv.appendChild(competence);
    handicapDiv.appendChild(golfHandicap);
    userPage.appendChild(nameDiv);
    userPage.appendChild(locationDiv);
    userPage.appendChild(genderDiv);
    userPage.appendChild(birthdayDiv);
    userPage.appendChild(skillDiv);
    userPage.appendChild(handicapDiv);

    swap('current', userPage, 'view');

  })
});

var loginAccess = document.getElementById('login-access');

loginAccess.addEventListener('click', function() {
  var userLogin = document.getElementById('login');

  swap('current', userLogin, 'view')

})


function swap(current, next, location) {
  var old = document.getElementsByClassName(current)[0];
  old.classList.remove('current');
  old.classList.add('hide');

  var theLocation = document.getElementById(location);
  theLocation.appendChild(next);
  next.classList.add('current');
  next.classList.remove('hide');
}
