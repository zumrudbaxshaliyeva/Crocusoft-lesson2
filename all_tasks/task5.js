let obj = { a: 1, b: 2, c: 3 };


let invertedObj = Object.keys(obj).reduce((acc, value)=>{
    acc[obj[value]] = value;
    return acc;
},{});
console.log(invertedObj);