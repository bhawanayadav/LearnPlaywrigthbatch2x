// function ValidateStatusCode(status) {
//     if (status >= 200 && status > 300) {
//         console.log("Request is correct")
//         return "Pass"
//     }

// }

// let Result = ValidateStatusCode(400);
// console.log(Result);

// const ValidateStatusCode = function (status) {
//     if (status >= 200 && status > 300) {
//         console.log("Request is correct")

//         return "Pass"
//     }
//     else
//         console.log("wrong Statement")
//     return "Fail"

// }
// let Result = ValidateStatusCode(40);
// console.log(Result);


const ValidateStatusCode = (status) => {
    if (status >= 200 && status > 300) {
        console.log("Request is correct")

        return "Pass"
    }
    else
        console.log("wrong Statement")
    return "Fail"

}
let Result = ValidateStatusCode(40);
console.log(Result);
