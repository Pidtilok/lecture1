let arr = [];
let length = +prompt('Enter the lenght of the array')
let res = 1


while (length < 2 || length > 10) {
  length = +prompt('The lenght of the array must be at least 2 and no more than 10')

  if (length < -2 && length > -10) {
    length = Math.abs(length)
  }
  lenght = Math.round(length)
}
for (let i = 0; i < length; i++) {
  arr.push(Math.round(Math.random()*10))
}
console.log(arr);

for (let el of arr) {
  res = res * el
}
console.log(res)
