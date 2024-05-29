const complexArray = [
    { id: 1, items: [{ name: 'apple', type: 'fruit' }, { name: 'carrot', type: 'vegetable' }] },
    { id: 2, items: [{ name: 'banana', type: 'fruit' }, { name: 'broccoli', type: 'vegetable' }] }
];


let invertArr = complexArray.reduce((acc, item)=>{
        item.items.pop();
        acc.push(item);
        return acc;
},[]);

console.log(invertArr);