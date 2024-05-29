const obj = { a: 1, b: 2, c: 3 }; 

let upperKeys = Object.keys(obj).reduce((acc, item)=>{
    acc[item.toUpperCase()] = obj[item];
    return acc;
},{});

console.log(upperKeys);