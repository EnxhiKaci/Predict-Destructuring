const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//12345
//undefined
console.log(password);
console.log(hashedPassword);
//In this case, 12345 is the value of the password variable, and undefined is the value of the hashedPassword variable due to the failed destructuring assignment.
