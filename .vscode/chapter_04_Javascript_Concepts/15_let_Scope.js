let a = 10;//GLOBAL SCOPE
console.log(a);
//defination of the function
function printHello() {
    console.log("function scope");
    let a = 20;//LOCAL SCOPE
    console.log(a);
    if (true) {//BLOCKED 
        let a = 30;
        console.log(a);
    }
    console.log("F=", a);
}
console.log("G=", a);
printHello();