var v = 10;
let l = 30;
const c = 3.23;
var browser = "crome"
var browser = "firefox"//this is redeclaration
browser = "edge";// this is reassignment

var testcase = ["login", "logout", "signup"]
for (var i = 0; i < testcase.length; i++) {
    console.log("running test:", testcase[i]);
}
console.log("loop encounter leaked outside:", i);
function say() {
    console.log("hi");
}//defining function

say()
say()//calling function