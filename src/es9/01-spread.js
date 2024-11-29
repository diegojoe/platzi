const user = {username: 'foo', password: 'bar', age: 30};
const {username,...values} = user;
console.log(username); // foo
console.log(values);
