// =============================================
// backtick vs single quote vs double quote
// =============================================

// 1. Single quotes ''
//    Used for plain strings.
let single = 'Hello world';

// 2. Double quotes ""
//    Also used for plain strings.
let double = "Hello world";

// 3. Backticks ``
//    Used for template literals, supports interpolation.
let name = 'Rajan';
let backtick = `Hello ${name}`;

console.log(single);   // Output: Hello world
console.log(double);   // Output: Hello world
console.log(backtick); // Output: Hello Rajan

// Short difference:
// - single and double quotes are almost the same for normal strings.
// - backticks allow ${expression} interpolation and multi-line text.
