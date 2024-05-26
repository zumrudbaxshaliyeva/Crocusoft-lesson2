const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// =======1ci variant============
let arr = new Set(arrayWithDuplicates);
console.log(arr);

// =======2ci variant============
let arr2 = arrayWithDuplicates.reduce((acc,item)=>{
        if(!acc.includes(item)){
            acc.push(item);
        }
        else{
            return acc;
        }

        return acc;
}, []);

console.log(arr2);