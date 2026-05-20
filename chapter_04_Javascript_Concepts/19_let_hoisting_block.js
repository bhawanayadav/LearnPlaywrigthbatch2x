//let is blocked scope
let x = "global";
if (true) {
    //tdz zone for blocked scope "x" starts here

    //console.log(x)
    let x = "blocked"

    console.log(x);

}
