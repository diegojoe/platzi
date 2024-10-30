// arrays destructuring

let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
let [a, b] = fruits;
console.log(a); // apple

let user = {username: 'john', email: 'diegoromero69@hotmail.com'};
let {username, email} = user;
console.log(username); // john

// spread operator

let person = {name: 'john', age: 25};
let country =  'USA';
let info = {...person, country};
console.log(info); // {name: 'john', age: 25, country: 'USA'}

function sum(num, ...values) {
console.log(num, values);

  return values.reduce((a, b) => a + b, num);
}
console.log(sum(1,2,3,4,5)); // 1 [2,3,4,5]
