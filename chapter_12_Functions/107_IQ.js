function runTest(name, status, duration) {
    return `${name} : ${status} , (${duration})`
}
let Result = runTest("Login", "Pass", 430);
console.log(Result)