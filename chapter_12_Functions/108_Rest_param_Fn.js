//Rest parameter or spread parameter 
function runTest(name, status, duration, ...PassedBy) {
    return `${name} : ${status} , (${duration}), ${PassedBy}`
}
let Result = runTest("Login", "Pass", 430, "Bhawana", "Rajanikanth", "AdhyuthShanmukha", "Vineela", "Shobha");
console.log(Result)