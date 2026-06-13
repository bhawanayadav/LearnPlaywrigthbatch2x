//Normal Funtion:
function ValidateStatusCode(status) {
    if (status >= 200 && status > 300) {
        console.log("Request is correct")
        return "Pass"
    }

}
ValidateStatusCode(800);
//IIFE:
// (function ValidateStatusCode(status = 90) {
//     if (status >= 200 && status > 300) {
//         console.log("Request is correct")
//         // return "Pass"
//     }
//     else
//         console.log("Wrong Statement")
//     // return "Fail"

// })();