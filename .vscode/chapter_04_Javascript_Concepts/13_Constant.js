const a = 10;
console.log(a)
//a = a + 1;
//console.log(a)
let b = 10
if (b = 10) {
    a = 20
    console.log(c);
}
// ===== POSITIVE SCENARIOS FOR CONST =====

// 1. Declaring a constant primitive value
const age = 25;
console.log("Age:", age); // ✓ Works

// 2. Declaring a constant string
const name = "Rajan";
console.log("Name:", name); // ✓ Works

// 3. Declaring a constant array (can modify contents, not reassign)
const colors = ["red", "green", "blue"];
colors.push("yellow"); // ✓ Works - modifying array contents
console.log("Colors:", colors);

// 4. Declaring a constant object (can modify properties, not reassign)
const person = { name: "John", age: 30 };
person.age = 31; // ✓ Works - modifying object properties
console.log("Person:", person);

// 5. Declaring a constant function
const greet = function () {
    console.log("Hello!"); // ✓ Works
};
greet();

// 6. Const must be initialized at declaration
const score = 100; // ✓ Works - initialized with value

// 7. Block scope protection
if (true) {
    const blockVar = "I'm block scoped";
    console.log("Block var:", blockVar); // ✓ Works within block
}

// ===== NEGATIVE SCENARIOS FOR CONST =====

// 1. ✗ CANNOT reassign a const primitive
// const age = 25;
// age = 26; // Error: TypeError: Assignment to constant variable

// 2. ✗ CANNOT redeclare const with same name
// const name = "Rajan";
// const name = "John"; // Error: SyntaxError: Identifier 'name' has already been declared

// 3. ✗ CANNOT declare const without initialization
// const score; // Error: SyntaxError: Missing initializer in const declaration

// 4. ✗ CANNOT reassign array reference (but can modify contents)
// const numbers = [1, 2, 3];
// numbers = [4, 5, 6]; // Error: TypeError: Assignment to constant variable
// However, this works:
const numbers = [1, 2, 3];
numbers[0] = 10; // ✓ Works - modifying element
console.log("Numbers:", numbers);

// 5. ✗ CANNOT reassign object reference (but can modify properties)
// const user = { name: "Alice" };
// user = { name: "Bob" }; // Error: TypeError: Assignment to constant variable
// However, this works:
const user = { name: "Alice" };
user.name = "Bob"; // ✓ Works - modifying property
console.log("User:", user);

// 6. ✗ CANNOT access const before declaration (Temporal Dead Zone)
// console.log(product); // Error: ReferenceError: Cannot access 'product' before initialization
// const product = "Laptop";

// 7. ✗ CANNOT use const in function parameter
// const function func(const param) {} // Error: Syntax error
// Correct way:
const func = (param) => {
    const result = param * 2; // ✓ Works
    return result;
};
console.log("Function result:", func(5));



