const SINGL_LIST_HEAD = {
  value: 0,
  next: null
};

function singlyList(value) {
  let currentNode = SINGL_LIST_HEAD;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  currentNode.next = {
    value: value,
    next: null
  };
}

const DEFAULT_PARAMETRS = [1, 'two', () => console.log('hello'), true];

DEFAULT_PARAMETRS.forEach(value => singlyList(value));

console.log(SINGL_LIST_HEAD.next.value);
console.log(SINGL_LIST_HEAD.next.next.next.value());


// const DOUBLY_LIST_HEAD = {
//   value: 0,
//   next: null,
//   prev: null
// };

// function doublyList(value) {
//   let currentNode = DOUBLY_LIST_HEAD;
//   while (currentNode.next !== null) {
//     currentNode = currentNode.next;
//   }
//   const newNode = {
//     value: value,
//     next: null,
//     prev: currentNode
//   };
//   currentNode.next = newNode;
// }

// const DEFAULT_PARAMETRS = [1, 'two', () => console.log('hello'), true];

// DEFAULT_PARAMETRS.forEach(value => doublyList(value));

// console.log(DOUBLY_LIST_HEAD.next.value); 
// console.log(DOUBLY_LIST_HEAD.next.next.next.value()); 
// console.log(DOUBLY_LIST_HEAD.next.next.next.prev.value); 

