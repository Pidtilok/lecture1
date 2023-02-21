const newObj = {};
function convert(obj) {  
for (let key in obj) { 
  if (typeof obj[key] === 'object') { 
    for (let key2 in obj[key]) { 
      newObj[key2] = obj[key][key2]; } } 
  else { 
    newObj[key] = obj[key]; } } 
  return newObj; 
}
console.log(convert(obj));