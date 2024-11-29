const anotherNumber = 1;
const validate = anotherNumber ?? 1000;
console.log(validate); // 1

const anotherNumber2 = null;
const validate2 = anotherNumber2 ?? 1000;
console.log(validate2); // 0
