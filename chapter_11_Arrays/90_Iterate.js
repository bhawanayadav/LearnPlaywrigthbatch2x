let test = ["Login", "Chcekout", "Search"];
for (i = 0; i < test.length; i++) {
    console.log(test[i])
}
console.log("\n")
////for of------
for (fest of test) {
    console.log(fest)

}
console.log("\n")
test.forEach((tests, index) => {
    console.log(tests, index)
});

let students = ["Bhawana", "Vineela", "Adhyuth"]
for (let student in students) {
    console.log(student, "->", students[student])
}