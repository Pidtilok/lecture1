// TASK 1 :
// function average() {
//   let ownArray = ['name', 'book', 2, 6, 'phome', 4, 7, 10];
//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i < ownArray.length; i++) {
//     if (!isNaN(ownArray[i])) {
//       count += 1;
//       sum += ownArray[i];
//     }
//   }
//   return res = sum / count;
// }
// let result = average();
// document.write(`Task 1 - Average: ${result} <br>`);

//TASK 2 :

// function doMath(x, znak, y) {
//   x = +prompt("Enter the value of x");
//   y = +prompt("ВEnter the value of y");
//   znak = prompt("Enter the operation +, -, *, /, %, ^ ");
//   let result;

//   if (znak === "+") {
//     result = x + y;
//   } else if (znak === "-") {
//     result = x - y;
//   } else if (znak === "*") {
//     result = x * y;
//   } else if (znak === "/") {
//     result = x / y;
//   } else if (znak === "%") {
//     result = x % y;
//   } else if (znak === "^") {
//     result = Math.pow(x, y);
//   } else {
//     result = "error"
//   }
//   return result;
// }

// let answer = doMath();
// document.write(`Task 2 - Answer: ${answer}<br>`);

//TASK 3 :

// let main = +prompt("Enter length first array");
// let sub = +prompt("Enter length second array");
// let arr = new Array(+main).fill(0).map((_, ind) =>
//   new Array(+sub).fill(0).map((_, i) => prompt(`Enter an element ${i} in subarray ${ind}`)));
// document.write(`Task 3 - Your array: ${arr}`);

//TASK 4 :

// const formatter = (string) => string.toUpperCase()

// function delEl(string, ...args) {
//     for(let i = 0; i < args.length; i++) {
//         string = string.replaceAll(args[i] ,"");

//       if (typeof args[i] == 'function') {
//       string = args[i](string);
//      }
//     }
//      return string;
// }

// console.log(delEl("hello world", 'd', 'o', 'e', formatter))
