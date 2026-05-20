// ========================
// null vs undefined in JS
// ========================

// 1. UNDEFINED
// ============
// undefined = variable declared but NOT assigned a value
// It's automatic, JavaScript sets it

let x; // declared but no value assigned
console.log(x); // Output: undefined
console.log(typeof x); // Output: undefined

// undefined also happens when:
// a) Function doesn't return anything
function test() {
    console.log("Hello");
    // no return statement
}
let result = test();
console.log(result); // Output: undefined

// b) Function parameter not provided
function greet(name) {
    console.log(name); // Output: undefined (if name not passed)
}
greet(); // not passing any argument


// 2. NULL
// =======
// null = intentionally set by programmer
// Means "no value" or "empty" by choice

let y = null; // explicitly assigned null
console.log(y); // Output: null
console.log(typeof y); // Output: object (quirk in JS!)


// 3. COMPARISON
// =============

let a;
let b = null;

// Loose equality (==) - both look similar
console.log(a == b); // Output: true

// Strict equality (===) - they are different
console.log(a === b); // Output: false

// Real example: API response
let userData = null; // user deleted their account or no data
let userEmail; // we haven't fetched it yet (undefined)


// 4. QUICK SUMMARY TABLE
// =====================
// undefined = "I don't know" (automatic)
// null = "Nothing/Empty" (intentional by programmer)
