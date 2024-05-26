let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers = numbers.filter(num => num % 2 === 0);
numbers = numbers.map(num => num*num);
console.log(numbers);
