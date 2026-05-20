// ====================================
// All Number Types Supported by JS
// ====================================

console.log("=== 1. INTEGER NUMBERS ===");
let int1 = 10;
let int2 = -5;
let int3 = 0;
console.log(int1); // Output: 10
console.log(int2); // Output: -5
console.log(int3); // Output: 0


console.log("\n=== 2. FLOATING POINT NUMBERS (Decimal) ===");
let float1 = 3.14;
let float2 = -2.5;
let float3 = 0.5;
console.log(float1); // Output: 3.14
console.log(float2); // Output: -2.5
console.log(float3); // Output: 0.5


console.log("\n=== 3. SCIENTIFIC NOTATION ===");
// Format: numberE+exponent or numberE-exponent
let sci1 = 5e3; // 5 * 10^3 = 5000
let sci2 = 2e-2; // 2 * 10^-2 = 0.02
let sci3 = 1.5e4; // 1.5 * 10^4 = 15000
console.log(sci1); // Output: 5000
console.log(sci2); // Output: 0.02
console.log(sci3); // Output: 15000


console.log("\n=== 4. HEXADECIMAL NUMBERS ===");
// Format: 0x followed by hex digits (0-9, A-F)
let hex1 = 0xFF; // 255 in decimal
let hex2 = 0x10; // 16 in decimal
let hex3 = 0xABCD; // 43981 in decimal
console.log(hex1); // Output: 255
console.log(hex2); // Output: 16
console.log(hex3); // Output: 43981


console.log("\n=== 5. OCTAL NUMBERS ===");
// Format: 0o followed by octal digits (0-7)
let oct1 = 0o10; // 8 in decimal
let oct2 = 0o77; // 63 in decimal
let oct3 = 0o755; // 493 in decimal
console.log(oct1); // Output: 8
console.log(oct2); // Output: 63
console.log(oct3); // Output: 493


console.log("\n=== 6. BINARY NUMBERS ===");
// Format: 0b followed by binary digits (0-1)
let bin1 = 0b1010; // 10 in decimal
let bin2 = 0b1111; // 15 in decimal
let bin3 = 0b11111111; // 255 in decimal
console.log(bin1); // Output: 10
console.log(bin2); // Output: 15
console.log(bin3); // Output: 255


console.log("\n=== 7. SPECIAL NUMBER VALUES ===");

// Infinity - positive infinity
let inf1 = Infinity;
let inf2 = 1 / 0;
console.log(inf1); // Output: Infinity
console.log(inf2); // Output: Infinity

// -Infinity - negative infinity
let ninf1 = -Infinity;
let ninf2 = -1 / 0;
console.log(ninf1); // Output: -Infinity
console.log(ninf2); // Output: -Infinity

// NaN - Not a Number
let nan1 = NaN;
let nan2 = 0 / 0;
let nan3 = Math.sqrt(-1);
console.log(nan1); // Output: NaN
console.log(nan2); // Output: NaN
console.log(nan3); // Output: NaN


console.log("\n=== 8. BIGINT ===");
// BigInt = numbers larger than 2^53 - 1
// Format: number followed by 'n'
let big1 = 12345678901234567890n;
let big2 = 999999999999999999n;
let big3 = BigInt(10); // using BigInt() function
console.log(big1); // Output: 12345678901234567890n
console.log(big2); // Output: 999999999999999999n
console.log(big3); // Output: 10n

// Note: Cannot mix BigInt with regular numbers
// let result = big1 + 10; // ERROR!
let result = big1 + 10n; // Correct
console.log(result); // Output: 12345678901234567900n


console.log("\n=== 9. TYPE CHECKING ===");
console.log(typeof 10); // Output: number
console.log(typeof 3.14); // Output: number
console.log(typeof Infinity); // Output: number
console.log(typeof NaN); // Output: number
console.log(typeof 0xFF); // Output: number
console.log(typeof 12n); // Output: bigint


console.log("\n=== 10. PRACTICAL EXAMPLES ===");
// Storing prices
let price = 99.99;
console.log("Price: $" + price); // Output: Price: $99.99

// Storing large IDs
let userId = 987654321n;
console.log("User ID: " + userId); // Output: User ID: 987654321

// Math calculations
let temperature = -15.5;
console.log("Temp: " + temperature + "°C"); // Output: Temp: -15.5°C

// Color code (Hexadecimal)
let colorRed = 0xFF0000; // Red in RGB
console.log("Red color code: " + colorRed); // Output: Red color code: 16711680

// File permissions (Octal)
let filePermission = 0o755; // rwxr-xr-x
console.log("Permission: " + filePermission); // Output: Permission: 493


console.log("\n=== QUICK SUMMARY ===");
console.log("Integer: 10, -5, 0");
console.log("Float: 3.14, -2.5, 0.5");
console.log("Scientific: 5e3, 2e-2");
console.log("Hexadecimal: 0xFF, 0x10");
console.log("Octal: 0o10, 0o77");
console.log("Binary: 0b1010, 0b1111");
console.log("Special: Infinity, -Infinity, NaN");
console.log("BigInt: 123n, 456n");
