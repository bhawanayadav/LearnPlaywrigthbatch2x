function runWithLogin(testfn, testname) {
    console.log(`staring :${testname}`)
    let result = testfn();
    console.log(`Finshed: ${testname} -> ${result}`);
    return result;

}
function loginTest() {
    return "pass"
}
function logiTestFailed() {
    return "Failed"
}
console.log(runWithLogin(loginTest, "LoginTest"));
console.log(runWithLogin(logiTestFailed, "LoginFailedTest"));
