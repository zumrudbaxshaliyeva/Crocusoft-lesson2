// cüt ədədləri tapın və daha sonra bu ədədlərin kvadratını hesablayın.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = numbers.filter((n) => n % 2 === 0).map((n) => n * n)

console.log(newArr)
