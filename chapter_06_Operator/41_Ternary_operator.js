let age = 18;
let Eligibilty_status = age > 18 ? "yes" : "no";
console.log(Eligibilty_status)

let actualTestresult = 200
let expectedTestresult = 200
let finalTestresult = actualTestresult === expectedTestresult ? "Pass" : "Fail";
console.log(finalTestresult)

let environment = "Prod"
let baseUrl = environment === "Prod" ? "https://api.prod.com" : "https://api.staging.com"
console.log(baseUrl)

let isCI = false;
let browserMode = isCI ? "HEADLESS" : "HEADED";
console.log("launch browser in", browserMode)


let age1 = 19;
let eligibleTogotoTour = age1 >= 18 ? (age1 > 25 ? "eligible for goa: eligible for goa" : "not eligible for a goa") : "Not eligible for tour";

console.log(eligibleTogotoTour)

let statusCode = 504;
let category =
    statusCode < 300 ? "Sucesss" :
        statusCode < 400 ? "redirect to main page" :
            statusCode < 500 ? "client error" : "servererror";
console.log(category)

//Maximum between two numbers

let a = 10;
let b = 20;
let maximumNumberis = (a > b ? "a is maximum number " : "b is maximum number")
console.log(maximumNumberis)

let c = 40;
let d = 80;
let e = 30;
let maximumNumber = c > d ? (c > e ? "c is greater" : "e is greater") : c < e ? "e is greater" : "b is greater:"
console.log(maximumNumber)