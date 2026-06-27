// Hierarchical Inheritance Example

// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

// Derived class 1
class Dog extends Animal {
    speak() {
        console.log(`${this.name} says: Woof!`);
    }
}

// Derived class 2
class Cat extends Animal {
    speak() {
        console.log(`${this.name} says: Meow!`);
    }
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

// Both derived classes share the base class behavior
dog.eat();
cat.eat();

// Each derived class has its own method
dog.speak();
cat.speak();
