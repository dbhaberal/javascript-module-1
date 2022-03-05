/**
 * Exercise F (15 mins)
In pairs, write a function that checks a username is of an acceptable format

for a user type. The function must:

take two parameters one for the username and one for the user type
if the username starts with a capital letter and has length between 5 and 10 
characters long, it must return "Username valid"; otherwise, it must return "Username invalid"
if the user type is an admin or a manager, all usernames must return "Username valid"
 */

const VALID_MESSAGE = 'Username valid';
const INVALID_MESSAGE = 'Username invalid';

/**
 * @param {string} userName
 * @param {string} userType
 */
function validateUserName(userName, userType) {
  if (checkIfManagement(userType) || validateUsernameFormat(userName)) {
    return VALID_MESSAGE;
  }
  return INVALID_MESSAGE;
}

/**
 *
 * @param {string} userType
 */
function checkIfManagement(userType) {
  return userType === 'admin' || userType === 'manager';
}

/**
 *
 * @param {string} userName
 */
function validateUsernameFormat(userName) {
  return userName[0] === userName[0].toUpperCase() &&
    userName.length >= 5 &&
    userName.length <= 10
}

console.log(validateUserName('Bob', 'admin'), ' | Expected: Username valid');
console.log(validateUserName('Bob', 'manager'), ' | Expected: Username valid');
console.log(
  validateUserName('Bob', 'student'),
  ' | Expected: Username invalid'
);

console.log(
  validateUserName('Bobby', 'student'),
  ' | Expected: Username valid'
);
console.log(
  validateUserName('Bobby Bobby Bobby ', 'student'),
  ' | Expected: Username invalid'
);

console.log(
  validateUserName('bobby', 'student'),
  ' | Expected: Username invalid'
);