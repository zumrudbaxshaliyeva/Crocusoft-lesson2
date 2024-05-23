/// 1 -------------------------------

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

//& first solution
const match = [];
for (let n of array1) {
  for (let m of array2) {
    if (n === m) {
      match.push(m);
    }
  }
}
console.log(match);

// //& second solution
const matching = array1.filter((el) => array2.includes(el));
console.log(matching);

/// 2 -------------------------------

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 30 },
//   { name: "Edward", age: 35 },
// ];

// const groupedByAge1 = {};
// for (let person of people) {
//   const age = person.age;

//   if (Object.keys(groupedByAge1).includes(age.toString())) {
//     groupedByAge1[age].push(person);
//   } else {
//     groupedByAge1[age] = [person];
//   }
// }
// console.log(groupedByAge1);

// const groupedByAge2 = people.reduce((acc, person) => {
//   const age = person.age;
//   (acc[age] = acc[age] || []).push(person);
//   return acc;
// }, {});
// console.log(groupedByAge2);

// const result = Object.groupBy(people, ({ age }) => age);
// console.log(result);

/// 3 -------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenSqr = numbers.reduce((acc, cur) => {
//   return cur % 2 == 0 ? [...acc, Math.pow(cur, 2)] : acc;
// }, []);
// console.log(evenSqr);

/// 4 -------------------------------

// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

// const withoutDbl1 = [...new Set(arrayWithDuplicates)];

// const withoutDbl2 = arrayWithDuplicates.reduce((acc, cur) => {
//   return !acc.includes(cur) ? [...acc, cur] : acc;
// }, []);

// console.log(withoutDbl1);
// console.log(withoutDbl2);

/// 5 -------------------------------

// const obj = { a: 1, b: 2, c: 3 };

// const replaceObj = {};

// for (let key in obj) {
//   replaceObj[obj[key]] = key;
// }

// console.log(replaceObj);

/// 6 -------------------------------

// const obj2 = { a: 1, b: 2, c: 3 };

// const upperKeys = {};

// for (let key in obj2) {
//   upperKeys[key.toUpperCase()] = obj2[key];
// }

// console.log(upperKeys);

/// 7 -------------------------------

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const obj3 = { c: 5, d: 6 };

// const joinObject = Object.assign(obj1, obj2, obj3);

// console.log(joinObject);

/// 8 -------------------------------

// const complexArray = [
//   {
//     id: 1,
//     items: [
//       { name: "apple", type: "fruit" },
//       { name: "carrot", type: "vegetable" },
//     ],
//   },
//   {
//     id: 2,
//     items: [
//       { name: "banana", type: "fruit" },
//       { name: "broccoli", type: "vegetable" },
//     ],
//   },
// ];

// const reduceFruit = complexArray.reduce((acc, cur) => {
//   cur.items = [...cur.items.filter((el) => el.type === "fruit")];
//   return [...acc, cur];
// }, []);

// console.log(reduceFruit);

/// 9 -------------------------------

// const students = [
//   { name: "Alice", grade: 85 },
//   { name: "Bob", grade: 92 },
//   { name: "Charlie", grade: 88 },
// ];

// const sortByAge = students.sort((a, b) => a.grade - b.grade);

// console.log(sortByAge);

/// 10 -------------------------------

// const user = { firstName: "John", lastName: "Doe", age: 30 };

// const modifyUser = {};
// modifyUser.fullName = `${user.firstName} ${user.lastName}`;
// modifyUser.yearsOld = user.age;
// console.log(modifyUser);
