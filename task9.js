// yaşlarına görə artan sıra ilə sıralayın.

// output:// [ // { name: 'Bob', grade: 92 }, // { name: 'Charlie', grade: 88 }, // { name: 'Alice', grade: 85 } // ]

const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 88 }
];

const sortAge = students.sort((a,b)=> a.grade - b.grade)

console.log(sortAge)