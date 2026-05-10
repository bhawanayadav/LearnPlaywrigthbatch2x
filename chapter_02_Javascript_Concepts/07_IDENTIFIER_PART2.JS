// ===== DIFFERENT NAMING CONVENTIONS/CASES IN JAVASCRIPT =====

// 1. camelCase (Most common for variables and functions in JavaScript)
var firstName = "Bhawana";
var lastName = "Singh";
var phoneNumber = 9876543210;
var userEmailAddress = "bhawana@example.com";
var getTotalPrice = function() {};

console.log("camelCase:");
console.log(firstName, lastName, phoneNumber);

// 2. PascalCase (Used for Class names and Constructors)
var PersonName = "Bhawana";
var UserAccount = { name: "Bhawana" };
var StudentRecord = {};

class UserProfile {}
function DatabaseConnection() {}

console.log("\nPascalCase:");
console.log(PersonName);

// 3. snake_case (Used in some databases and APIs, less common in JavaScript)
var first_name = "Bhawana";
var last_name = "Singh";
var phone_number = 9876543210;
var user_email_address = "bhawana@example.com";
var get_total_price = function() {};

console.log("\nsnake_case:");
console.log(first_name, last_name);

// 4. CONSTANT_CASE (Used for constants - all uppercase with underscores)
var MAX_USER_COUNT = 100;
var MIN_PASSWORD_LENGTH = 8;
var API_KEY = "abc123xyz";
var DATABASE_URL = "mongodb://localhost:27017";
var APPLICATION_VERSION = "1.0.0";

console.log("\nCONSTANT_CASE:");
console.log(MAX_USER_COUNT, MIN_PASSWORD_LENGTH);

// 5. kebab-case (NOT valid for variable names, used in CSS/HTML)
// var user-name = "Bhawana";  // ERROR: Hyphens not allowed in identifiers
// Instead, use camelCase for JavaScript variables

console.log("\nkebab-case (NOT valid for JavaScript variables):");
// HTML/CSS would use: user-name, phone-number, email-address

// 6. Private variable naming (convention using underscore prefix)
var _privateVar = "secret";
var _internalCount = 0;
var _getPrivateData = function() {};

console.log("\nPrivate variable naming (underscore prefix):");
console.log(_privateVar);

// 7. Mixed examples - Practical usage
var userId = 101;                    // camelCase for variable
var UserController = {};             // PascalCase for class/constructor
var MAX_RETRIES = 3;                 // CONSTANT_CASE for constant
var _internalState = {};             // Private variable

console.log("\nMixed Examples:");
console.log(userId);
console.log(MAX_RETRIES);

// 8. Real-world comparison
console.log("\n===== NAMING CONVENTION COMPARISON =====");
var myName = "Bhawana";              // camelCase - RECOMMENDED FOR JS
var my_name = "Bhawana";             // snake_case - NOT recommended
var MyName = "Bhawana";              // PascalCase - for classes only
var MY_NAME = "Bhawana";             // CONSTANT_CASE - for constants only

console.log(myName);
console.log(my_name);
console.log(MyName);
console.log(MY_NAME);
