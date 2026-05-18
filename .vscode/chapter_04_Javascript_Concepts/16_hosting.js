//Hosting&Temporal Dead Zone(TDZ)
console.log(greeting);
var greeting = "hello";
console.log(greeting);

/*behind the scenes;
var greeting; ===>hoisted with undefined 
console.log(greeting);===>undefined
greeting="hello";
console.log(greeting)====>"hello"*/