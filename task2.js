// Yaşa görə qruplaşdırın. Output:// { // 25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }], // 30: [{ name: 'Bob', age: 30 }, { name: 'David', age: 30 }], // 35: [{ name: 'Edward', age: 35 }] // }

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 },
    { name: 'Edward', age: 35 }];


const group = people.reduce((acc, cur) => {
    if (!acc[cur.age]) {
        acc[cur.age] = []
    }
    acc[cur.age].push(cur)
    return acc
}, {})

console.log(group)