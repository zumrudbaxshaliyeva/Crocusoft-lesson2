let obj = { a: 1, b: 2, c: 3 }; 
let objKeys = Object.keys(obj);

objKeys=objKeys.map(item=>item.toUpperCase());
console.log(obj);