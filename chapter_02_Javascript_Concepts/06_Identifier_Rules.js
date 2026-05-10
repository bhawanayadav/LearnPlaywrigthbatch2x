// ===== VALID IDENTIFIERS =====

// Rule 1: Can start with letter
var myVariable = 10;
var firstName = "John";
var age = 25;

// Rule 2: Can start with underscore (_)
var _age = 30;
var _firstName = "Jane";
var __privateVar = 100;

// Rule 3: Can start with dollar sign ($)
var $price = 99.99;
var $total = 500;
var $ = 10;

// Rule 4: Can contain digits (but NOT start with digit)
var abc123 = 90;
var var1 = 20;
var test2name = "valid";
var name123abc = 45;

// Rule 5: Can contain underscore and dollar sign
var my_var = 50;
var my$var = 60;
var a_b_c = 82;
var user_first$name = "test";

// Rule 6: Case-sensitive (different variables)
var name = "lowercase";
var Name = "uppercase";
var NAME = "all uppercase";
console.log(name);   // lowercase
console.log(Name);   // uppercase
console.log(NAME);   // all uppercase

// Rule 7: Can be any length
var veryLongVariableNameThatIsStillValidInJavaScript = 1000;
var a = 1;
var b = 2;

// ===== INVALID IDENTIFIERS (Uncomment to see errors) =====

// var 123abc = 10;        // ERROR: Cannot start with digit
// var 1st = 20;           // ERROR: Cannot start with digit
// var my var = 30;        // ERROR: Cannot contain space
// var my-var = 40;        // ERROR: Cannot use hyphen
// var my@var = 50;        // ERROR: Cannot use @ symbol
// var my#var = 60;        // ERROR: Cannot use # symbol
// var let = 70;           // ERROR: 'let' is a reserved keyword
// var const = 80;         // ERROR: 'const' is a reserved keyword
// var function = 90;      // ERROR: 'function' is a reserved keyword
// var return = 100;       // ERROR: 'return' is a reserved keyword
// var if = 110;           // ERROR: 'if' is a reserved keyword

// ===== CONSOLE OUTPUT =====
console.log("Valid Identifiers Examples:");
console.log(myVariable);
console.log(_age);
console.log($price);
console.log(abc123);
console.log(my_var);
console.log(name, Name, NAME);
4

