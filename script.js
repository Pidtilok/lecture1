const name = prompt("Your name?");
const surname = prompt("Your last name?");
const date = +prompt("Your date of birth?");
const month = +prompt("Your month of birth?");
const year = +prompt("Your year of birth?");
const yearNow = 2023;
const age = yearNow - year;

let leaps
if (year % 400 == 0 || year % 4 == 0) {
  console.log(leaps = '(leap year),')
}
else {
  console.log(leaps = '(not a leap year)')
}


let zodiac
if (month == 1 && date >= 20 || month == 2 && date <= 18) {
  console.log(zodiac = 'Aquaris')
}
else if (month == 2 && date >= 19 || month == 3 && date <= 20) {
  console.log(zodiac = 'Pisces')
}
else if (month == 3 && date >= 21 || month == 4 && date <= 19) {
  console.log(zodiac = 'Aries')
}
else if (month == 4 && date >= 20 || month == 5 && date <= 20) {
  console.log(zodiac = 'Taurus')
}
else if (month == 5 && date >= 21 || month == 6 && date <= 20) {
  console.log(zodiac = 'Gemini')
}
else if (month == 6 && date >= 21 || month == 7 && date <= 22) {
  console.log(zodiac = 'Cancer')
}
else if (month == 7 && date >= 23 || month == 8 && date <= 22) {
  console.log(zodiac = 'Leo')
}
else if (month == 8 && date >= 23 || month == 9 && date <= 22) {
  console.log(zodiac = 'Virgo')
}
else if (month == 9 && date >= 23 || month == 10 && date <= 22) {
  console.log(zodiac = 'Libra')
}
else if (month == 10 && date >= 23 || month == 11 && date <= 21) {
  console.log(zodiac = 'Scorpio')
}
else if (month == 11 && date >= 22 || month == 12 && date <= 21) {
  console.log(zodiac = 'Sagittarius')
}
else if (month == 12 && date >= 22 || month == 1 && date <= 19) {
  console.log(zodiac = 'Capricorn')
}
document.write(`User Bio: ${name} ${surname}, ${age} years old, ${zodiac}, ${leaps}`);

