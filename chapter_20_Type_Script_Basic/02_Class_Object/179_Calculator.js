class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    static company = "Playwright2x";
    static version = 1.0;

    add() {
        return this.a + this.b;
    }

    subtract() {
        return this.a - this.b;
    }

    multiply() {
        return this.a * this.b;
    }

    divide() {
        if (this.b === 0) {
            return "Cannot divide by zero";
        }
        return this.a / this.b;
    }

    static showInfo() {
        console.log(`Calculator from ${Calculator.company}, version ${Calculator.version}`);
    }
}

const calc = new Calculator(10, 5);

console.log("Addition:", calc.add());
console.log("Subtraction:", calc.subtract());
console.log("Multiplication:", calc.multiply());
console.log("Division:", calc.divide());

Calculator.showInfo();
console.log("Static company:", Calculator.company);
console.log("Static version:", Calculator.version);
