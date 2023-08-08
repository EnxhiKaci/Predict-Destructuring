const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//value
//[1,5,1,8,3,3]
//1
//5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
