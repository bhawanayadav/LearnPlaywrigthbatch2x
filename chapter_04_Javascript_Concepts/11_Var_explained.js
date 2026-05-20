var a = 10;
console.log(a);
function PrintHello() {
    console.log("inside hello")
    var a = 20;
    console.log(a);
    if (true) {
        var a = 90;
        console.log(a)
    }
}
PrintHello();
