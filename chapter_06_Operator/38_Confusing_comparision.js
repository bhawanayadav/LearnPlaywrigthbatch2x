// 38_Confusing_comparision.js
// Quick examples showing differences between == (loose) and === (strict)

// Basic string/number comparisons
console.log('"0" == 0 ->', "0" == 0);      // true: "0" coerced to number 0
console.log('"0" === 0 ->', "0" === 0);    // false: different types

// Boolean coercion
console.log('0 == false ->', 0 == false);      // true: false -> 0
console.log('0 === false ->', 0 === false);    // false: number vs boolean

// Empty string and zero
console.log("'' == 0 ->", '' == 0);          // true
console.log("'' === 0 ->", '' === 0);        // false

// null and undefined
console.log('null == undefined ->', null == undefined);   // true (special case)
console.log('null === undefined ->', null === undefined); // false

// Arrays and booleans (surprising to some)
console.log('[] == false ->', [] == false);    // true: [] -> '' -> 0
console.log('[] === false ->', [] === false);  // false

console.log('[1] == true ->', [1] == true);    // true: [1] -> '1' -> 1
console.log('[1] === true ->', [1] === true);  // false

// Objects compared to objects
console.log('{} == {} ->', {} == {});          // false: different object references
console.log('{} === {} ->', {} === {});        // false

// NaN is never equal to itself with == or ===
console.log('NaN == NaN ->', NaN == NaN);      // false
console.log('Object.is(NaN, NaN) ->', Object.is(NaN, NaN)); // true (use Object.is for this)

// Whitespace coercion
console.log('" \t\n " == 0 ->', ' \t\n ' == 0); // true: whitespace trimmed/coerced to 0

// Summary hint for learners
console.log('\nSummary: use === when you want no coercion; == performs type coercion and has\n+many surprising corner cases (null/undefined, objects, arrays, empty strings).');
