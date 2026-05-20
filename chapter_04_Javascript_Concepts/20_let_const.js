//console.log(c);
//console.log("hi");
//console.log('hey')

//const c = -"bhawana"
//let is blocked scope
const x = "global";
if (true) {
    //tdz zone for blocked scope "x" starts here

    console.log(x)
    const x = "blocked"

    console.log(x);

}