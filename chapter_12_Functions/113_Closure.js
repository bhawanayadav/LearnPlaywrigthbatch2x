function outer() {
    let message = "Hello";
    console.log("outercalled");
    function inner() {
        console.log(message);
    }
    return inner();
}
let function_inner = outer();
function_inner();
