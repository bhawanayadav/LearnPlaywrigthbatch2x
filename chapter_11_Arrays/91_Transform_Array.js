let scores = [10, 20, 30, 90]

let grade = scores.map(s => s > 70 ? "Pass" : "Fail")
console.log(grade)
let passing = scores.filter(s => s < 70);
console.log(passing)
let total = scores.reduce((a, b) => a + b, 0);
console.log(total);
let nested = [[1, 3], [4, 5], [6, 7]]
console.log(nested.flat())