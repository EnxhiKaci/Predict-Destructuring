
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//ReferenceError: name is not defined
//Elon
console.log(name);
console.log(otherName);
//The error occurs at the line 'console.log(name)'; because the variable name is not defined in the current scope.