// Logical operators examples: && (AND), || (OR), ! (NOT)

// 1) Basic boolean behavior
let a = true;
let b = false;
console.log('a && b ->', a && b); // false
console.log('a || b ->', a || b); // true
console.log('!a ->', !a);         // false

// 2) Short-circuit evaluation and returned values
console.log('"hello" && "world" ->', "hello" && "world"); // "world"
console.log('"" && "world" ->', "" && "world");           // "" (empty string is falsy)
console.log('"hello" || "world" ->', "hello" || "world"); // "hello"
console.log('0 || 42 ->', 0 || 42);                               // 42 (0 is falsy)
console.log('null && "no" ->', null && "no");                 // null (short-circuited)

// 3) Short-circuit with side effects (functions)
function sideEffect(name) {
    console.log('sideEffect called for', name);
    return name;
}
console.log('false && sideEffect ->', false && sideEffect('A')); // false (sideEffect not called)
console.log('true || sideEffect ->', true || sideEffect('B'));   // true (sideEffect not called)
console.log('0 || sideEffect ->', 0 || sideEffect('C'));         // sideEffect called, returns 'C'

// 4) Common pattern: provide defaults
let userInput = '';
let display = userInput || 'Default value';
console.log('display ->', display); // 'Default value'

// Notes:
// - && returns the first falsy operand, or the last operand if all are truthy.
// - || returns the first truthy operand, or the last operand if all are falsy.
// - ! coerces a value to boolean and negates it.
