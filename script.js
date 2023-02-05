let upper = /[A-Z]/g;
let countTries = 3

while (countTries > 0) {
  let email = prompt('Enter your email');
  let password = prompt('Enter your password');

  if (email.length <= 15 && email.includes('@') && email.endsWith('.com')) {
    document.write(`Your account successfully registered: email: ${email}, password ${password}`)
    break;
  }
  else if (email.startsWith('@') || email.startsWith(' ') || email.endsWith('@') || email.endsWith(' ')) {
    alert(`Write correct email. Email cannot start with @ and a space.You have ${countTries = countTries - 1} attemps left`)
  }
  else {
    alert(`Write correct email. Email must have one @ sign (not at the end and not at the beginning), have no more than 15 characters, end with ".com".`)
  }

  if (password.length >= 4 && password.length <= 12 && password.match(upper)) {
    document.write(`Your account successfully registered: email: ${email}, password ${password}`)
    break;
  }
  else {
    alert(`Write the correct password. Password must be more than 4 and less than 15 symbols,and have one upper case You have ${countTries = countTries - 1} attemps left`)
  }

  if (countTries <= 0) {
    alert('Sorry,you do not have more tries')
  }
} 