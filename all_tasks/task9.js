const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 88 }
];

let sortStudents = students.sort((a,b)=>b.grade - a.grade);
console.log(sortStudents);

