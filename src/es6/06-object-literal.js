function newUser(name, age, country, uId) {
  return {
      name,
    age,
    country,
      uId
  };
}

console.log(newUser('john', 25, 'USA',1)); // {user: 'john', age: 25, country: 'USA'}
