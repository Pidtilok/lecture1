const numbers = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1.The sum of positive numbers:

const result = numbers.reduce((accumulator, current) => current > 0 ? accumulator + current : accumulator, 0)

let pos = numbers.filter(elem =>(elem > 0))

document.write(`The sum of positive numbers: ${result}, ${pos.length}<br>`);


// 2.The minimum array element and his number:

let min = numbers[0];

numbers.forEach(function (elem, index) {
if(index > 0 ){
if(min > elem){
min = elem;}
}
})

let minInd = numbers.indexOf(min)
document.write(`The minimum array element and his number:${min}, ${minInd}; <br>`);

// 3.The maximun array element and hus number:

let max = numbers[0];
numbers.forEach(function (elem, index) {
if(index > 0 ){
if(max < elem){
max = elem;
}
}
});

let maxInd = numbers.indexOf(max)
document.write(`The maximum array element and his number:${max}, ${maxInd};<br>`);

// 4.Quantity of negative elements:

let neg = numbers.filter(elem =>(elem < 0))

document.write(`Quantity of negative elements:${neg.length};<br>`);

// 5.Quantity of odd positive elements:

let odd = numbers.filter(elem =>(elem % 2 != 0))
let posOdd = odd.filter(elem =>(elem > 0))

document.write(`Quantity of odd positive elements: ${posOdd.length};<br>`)

// 6.Quantity of pair positive elements:

let pair = numbers.filter(elem =>(elem % 2 === 0))
let posPair = pair.filter(elem =>(elem > 0))

document.write(`Quantity of pair positive elements: ${posPair.length};<br>`)

// 7.Sum of pair positive elements:

let sumPair = posPair.reduce((accumulator, current) => accumulator + current, 0)
document.write(`Sum of pair positive elements: ${sumPair};<br>`)

// 8.Sum of odd positive elements:

let sumOdd = posOdd.reduce((accumulator, current) => accumulator + current, 0)

document.write(`Sum of odd positive elements: ${sumOdd};<br>`)

// 9.Product of positive elements:
let prod = pos.reduce((accumulator, current) => accumulator * current)

document.write(`Product of positive elements: ${prod};<br>`)

//10.Find the largest among the elements of the array, reset the last one to zero. (the last element must be 0)

let big = Math.max(...numbers);

let bigInd = numbers.indexOf(big);

numbers.forEach((elem,index,numbers)=>{ 
if (index!=bigInd) 
numbers[index]=0; });

document.write(`Find the largest among the elements of the array, reset the last one to zero. (the last element must be 0):${numbers}`)