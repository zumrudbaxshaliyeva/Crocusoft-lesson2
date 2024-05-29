const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
const person = {
    fullName: `${user.firstName} ${user.lastName}`,
    yearsOld: user.age
}
console.log(person);