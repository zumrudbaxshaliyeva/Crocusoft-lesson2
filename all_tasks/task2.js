const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 },
    { name: 'Edward', age: 35 }
];

// ==========1-ci variant=========
// const result = Object.groupBy(people, ({age})=>age);
// console.log(result);

let arr=[];

people.forEach(obj=>arr.push(obj.age));
arr=[...new Set(arr)];
arr = arr.sort((a,b)=> a-b);


// ==========2-ci variant=========
arr.forEach(item=>{
    let user=people.filter(obj=>item===obj.age);
    let totalWorkers=`${item}: `+user;
    console.log(`${item}: `, user);
});

