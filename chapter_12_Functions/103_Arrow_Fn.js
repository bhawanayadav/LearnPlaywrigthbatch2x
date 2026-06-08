const greet = function (name1) {
    return name1;

}
let result = greet("bhawana");
console.log(result);
const greet2 = (name1) => "hi" + name1
let result2 = greet2("bhawana");
console.log(result2);
const doubleIt = n => n * 2;
console.log(doubleIt(4));
const printIt = name => console.log(name);
printIt("Bhawana")