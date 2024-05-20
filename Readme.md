
# Advanced JavaScript Array and Object Manipulation

This project includes advanced examples of array and object manipulations in JavaScript. Each example demonstrates a specific task with code snippets to illustrate the solution.

## Table of Contents
- [Examples](#examples)
  - [Finding Common Elements in Arrays](#finding-common-elements-in-arrays)
  - [Grouping Objects by Age](#grouping-objects-by-age)
  - [Finding and Squaring Even Numbers](#finding-and-squaring-even-numbers)
  - [Removing Duplicates from an Array](#removing-duplicates-from-an-array)
  - [Inverting Keys and Values in an Object](#inverting-keys-and-values-in-an-object)
  - [Uppercasing Object Keys](#uppercasing-object-keys)
  - [Merging Multiple Objects](#merging-multiple-objects)
  - [Filtering Nested Objects by Property](#filtering-nested-objects-by-property)
  - [Sorting Objects by Property](#sorting-objects-by-property)
  - [Transforming an Object](#transforming-an-object)

## Questions

## Task-1
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

Arraydeki ortaq elementləri tapin.

## Task-2
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 },
    { name: 'Edward', age: 35 }
];

Yaşa görə qruplaşdırın.
Output:// {
//   25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//   30: [{ name: 'Bob', age: 30 }, { name: 'David', age: 30 }],
//   35: [{ name: 'Edward', age: 35 }]
// }


## Task-3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
cüt ədədləri tapın və daha sonra bu ədədlərin kvadratını hesabplayın.

## Task-4
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
Təkrar olunmanın qarşısını alın.

## Task-5
const obj = { a: 1, b: 2, c: 3 };
verilən obyektdə key və valunein yerini dəyişin.

## Task-6
const obj = { a: 1, b: 2, c: 3 }; 
verilmiş obyektdəki keyləri uppercase edin.

## Task-7
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };
bu obyektləri birləşdirin.

## Task-8
const complexArray = [
    { id: 1, items: [{ name: 'apple', type: 'fruit' }, { name: 'carrot', type: 'vegetable' }] },
    { id: 2, items: [{ name: 'banana', type: 'fruit' }, { name: 'broccoli', type: 'vegetable' }] }
];

Output:// [
//   { id: 1, items: [{ name: 'apple', type: 'fruit' }] },
//   { id: 2, items: [{ name: 'banana', type: 'fruit' }] }
// ]

## Task-9
const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 88 }
]; yaşlarına görə artan sıra ilə sıralayın.

output:// [
//   { name: 'Bob', grade: 92 },
//   { name: 'Charlie', grade: 88 },
//   { name: 'Alice', grade: 85 }
// ]

## Task-10
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

Verilmiş obyekti aşağıdakı kimi dəyişin
output: // { fullName: 'John Doe', yearsOld: 30 }
readme fayli seklinde yaz