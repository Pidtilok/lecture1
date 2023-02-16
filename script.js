const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

const universes = [
	['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]


function getInfo(array, tableName) {
  let arrayItem = ' ';
  let result = ' ';
    if (Array.isArray(array)) {
      arrayItem = array.join(';')
        array.forEach((array) => {  
            let face = array[0]
            let type = array[1]
            let name = array[2]
           result = result + `<tr><td>${face}</td><td>${type}</td><td>${name}</td></tr>`;
        })
        document.write(`<table>${tableName} ${result}</table>`)
    }
}

getInfo(animals, 'Animals Info')
getInfo(food, 'Food Info')
getInfo(universes, 'Universes Info')



// const animals = [
//   ['🐭', 'mouse', 'Jerry'],
//   ['🐹', 'hamster', 'Biscuit'],
//   ['🐰', 'rabbit', 'Bugs'],
//   ['🦊', 'fox', 'Mrs. Fox'],
//   ['🐻', 'bear', 'Paddington']
// ];

// const food = [
//   ['🍎', 'apple', 10],
//   ['🍐', 'pear', 12],
//   ['🍊', 'tangerine', 15],
//   ['🍋', 'lemon', 5],
//   ['🍌', 'banana', 7]
// ];

// const universes = [
//   ['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
//   ['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
// ]

// function getInfo(tableName, array) {
//   let face = array[0]
//   let type = array[1]
//   let name = array[2]

//   let resultTable = `<tr><td>${face}</td></tr><tr><td>${type}</td></tr><tr><td>${name}</td></tr>`;

//   document.write(`<table>${tableName} ${resultTable}</table>`)

// }

// getInfo('Animals Info', animals)
// getInfo('Food Info', food)
// getInfo('Universes Info', universes)


// const animals = [
// 	['🐭','mouse','Jerry'],
// 	['🐹','hamster','Biscuit'],
// 	['🐰','rabbit','Bugs'],
// 	['🦊','fox','Mrs. Fox'],
// 	['🐻','bear','Paddington']
// ];

// const food = [
// 	['🍎','apple',10],
// 	['🍐','pear',12],
// 	['🍊','tangerine',15],
// 	['🍋','lemon',5],
// 	['🍌','banana',7]
// ];

// const universes = [
// 	['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
// 	['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
// ]

// function getInfo(tableName, array) {
//   for (i = 0; i < array.length; i++) {
//     for(j = 0; j < array[i].length; j++){
//       let face = array[0]
//     let type = array[1]
//     let name = array[2]
      
//   let resultTable = `<tr><td>${face}</td></tr><tr><td>${type}</td></tr><tr><td>${name}</td></tr>`;
  
//   document.write(`<table>${tableName} ${resultTable}</table>`)
//     }
//   }
// }

// getInfo('Animals Info', animals)
// getInfo('Food Info', food)
// getInfo('Universes Info', universes)
