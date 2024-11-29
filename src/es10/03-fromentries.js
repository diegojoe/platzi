const entries = new Map([["name", "Oscar"],["age", 32]]);
console.log(entries); // Map { 'name' => 'Oscar', 'age' => 32 }
console.log(Object.fromEntries(entries)); // { name: 'Oscar', age: 32 }
