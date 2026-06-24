const user = { name1: "bhawana", age: 25, city: "nyc" };
// const { name1, age } = user;
// console.log(user)
// console.log(name1);
// console.log(age);
const { name1: username, age: userage } = user;
console.log(username);
console.log(userage);
const { age } = user;
const { country = "usa" } = user;
console.log(country)

