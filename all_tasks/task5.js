let obj = { a: 1, b: 2, c: 3 };


Object.entries(obj).reduce((acc, [a,b])=>{
     acc[b] = a;
    return console.log(acc);
    
}, {});

// Task 5 basa dusmedim , yaza bilmedim