// Verilmiş obyekti aşağıdakı kimi dəyişin output: // { fullName: 'John Doe', yearsOld: 30 } readme fayli seklinde yaz

const user = { firstName: 'John', lastName: 'Doe', age: 30 };

const fullName = `${user.firstName} ${user.lastName}`
const yearsOld = user.age

const modified = {fullName, yearsOld}


console.log(modified)