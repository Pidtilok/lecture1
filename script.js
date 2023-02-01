const name = prompt("Your name?");
const surname = prompt("Your last name?");
const date = +prompt("Your date of birth?");
const month = +prompt("Your month of birth?");
const year = +prompt("Your year of birth?");
const yearNow = 2023;
const age = yearNow - year;

let leaps
if (year % 400 == 0 || year % 4 == 0) {
  leaps = '(leap year)'
}
else {
  leaps = '(not a leap year)'
}


let zodiac
if (month == 1 && date >= 20 || month == 2 && date <= 18) {
  zodiac = 'Aquaris'
}
else if (month == 2 && date >= 19 || month == 3 && date <= 20) {
  zodiac = 'Pisces'
}
else if (month == 3 && date >= 21 || month == 4 && date <= 19) {
  zodiac = 'Aries'
}
else if (month == 4 && date >= 20 || month == 5 && date <= 20) {
  zodiac = 'Taurus'
}
else if (month == 5 && date >= 21 || month == 6 && date <= 20) {
  zodiac = 'Gemini'
}
else if (month == 6 && date >= 21 || month == 7 && date <= 22) {
  zodiac = 'Cancer'
}
else if (month == 7 && date >= 23 || month == 8 && date <= 22) {
  zodiac = 'Leo'
}
else if (month == 8 && date >= 23 || month == 9 && date <= 22) {
  zodiac = 'Virgo'
}
else if (month == 9 && date >= 23 || month == 10 && date <= 22) {
  zodiac = 'Libra'
}
else if (month == 10 && date >= 23 || month == 11 && date <= 21) {
  zodiac = 'Scorpio'
}
else if (month == 11 && date >= 22 || month == 12 && date <= 21) {
  zodiac = 'Sagittarius'
}
else if (month == 12 && date >= 22 || month == 1 && date <= 19) {
  zodiac = 'Capricorn'
}
document.write(`User Bio: ${name} ${surname}, ${age} years old, ${zodiac}, ${leaps}`);

