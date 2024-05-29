const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

// forEach and includes() methods of Array
array1.forEach(el=>{
    if(array2.includes(el)){
        console.log(el);
    }
});

