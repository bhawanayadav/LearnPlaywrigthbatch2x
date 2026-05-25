//Question 1 — HTTP Status Code Categorizer
let HTTP_Code = 119;
if (HTTP_Code >= 200 && HTTP_Code <= 299) {
    console.log("Success")
}
else if (HTTP_Code >= 300 && HTTP_Code <= 399) {
    console.log("Redirection")
}
else if (HTTP_Code >= 400 && HTTP_Code <= 499) {
    console.log("Client Error")
}
else if (HTTP_Code >= 500 && HTTP_Code <= 599) {
    console.log("Server Error")
}
else {
    console.log("InValid")
}
//Question 2 — Test Case Pass / Fail Verdict
let actualResult = "login Sucessfull";
let expectedResult = "login Sucessfull"
if (actualResult === expectedResult) {
    console.log("Testcase Passed")
} else (
    console.log("Testcase Failed")
)
//Question 3 — Bug Severity Classifier
let bugSeverity = 5;
if (bugSeverity === 9 || bugSeverity === 10) {
    console.log("Critical(block release)")
} else if (bugSeverity === 7 || bugSeverity === 8) {
    console.log("High")
} else if (bugSeverity >= 4 && bugSeverity <= 6) {
    console.log("Medium")
} else if (bugSeverity >= 1 && bugSeverity <= 3) {
    console.log("Low")
} else {
    console.log("Invalid");
}


//Question 4 — Build Health Reporter

let HealthPercentage = 90;

if (HealthPercentage === 100) {
    console.log(`Input : ${HealthPercentage}\n Output:Application Stable`)

} else if (HealthPercentage >= 90 && HealthPercentage < 100) {
    console.log(`Input : ${HealthPercentage}\n Output: Stable-Investigate Failure`)

} else if (HealthPercentage >= 70 && HealthPercentage < 90) {
    console.log(`Input : ${HealthPercentage}\n Output:UnStable`)

} else if (HealthPercentage < 70) {
    console.log(`Input : ${HealthPercentage}\n Output: Broken Build -Block Development`)

}
//Question 5 — Login Lockout After Failed Attempts

//Problem: Track failed login attempts.Lock the account after 3 failed attempts.

let attempt = 1;
if (attempt == 1) {
    console.log("2 attempt left before lockout")
} else if (attempt == 2) {
    console.log("1 attempt left before lockout")
} else if (attempt == 3) {
    console.log("🔒 Account Locked — Contact support")
} else if (attempt == 0) {
    console.log("Login sucessful")
}