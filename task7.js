// bu obyektləri birləşdirin.

const obj1 = {
    a: 1,
    b: 2
};
const obj2 = {
    b: 3,
    c: 4
};
const obj3 = {
    c: 5,
    d: 6
}; 

const joinObj = Object.assign(obj1, obj2, obj3)

console.log(joinObj)