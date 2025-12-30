// Prototype

// Constructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.info = function () {
    return `Hello i am ${this.name}`;
  };
}
let Person1 = new Person("Rahul", 22);
let Person2 = Person("Karan", 20);

console.log(typeof Person1)  // object
console.log(Person1);
// Person { name: 'Rahul', age: 22, info: [Function (anonymous)] }
console.log(global.name);// Karan
console.log(Person1.info()); 
//Hello i am Rahul

// By itself, Person is just a normal function.
// Nothing special happens until you call it with new.

// What happens when you do this
const person1 = new Person("Alex", 25);

// When new is used, JavaScript secretly performs 4 internal steps.

// 🔹 Step 1: Create a new empty object
// const obj = {};

// 🔹 Step 2: Link prototype
// obj.__proto__ = Person.prototype;
// This is why p1 instanceof Person becomes true.

// 🔹 Step 3: Bind this to the new object
// Inside the function:
// this === obj;
// So when this line runs:
// this.name = name;
// It becomes: obj.name = "Alex";

// 🔹 Step 4: Return the object (implicitly)
// If the function doesn’t explicitly return an object, JS does:
// return obj;

// A function behaves like a constructor only because new hijacks its execution context and return value.

// Big problem in your code (important)
//  This line:
//  this.info = function () { ... };
//  creates a new function for every object
//  Memory waste.

// Correct professional way (prototype)

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.info = function () {
  return `Hello i am ${this.name}`;
};

// Now: info exists once
// shared by all objects


// function Animal(species) {
//   this.species = species;
// }

Animal.prototype.sound = function () {
    return `${this.species} makes a sound`;
  };
  let newAnimal = new Animal("dog");
  console.log(newAnimal.sound());
  
  let arr = [1, 2, 3, 4, 5, 6];
  Array.prototype.fun = function () {
    return this.length + 1;
  };
  console.log(arr.fun());
  console.log(arr.__proto__);


let tomHardware = {
  hello: "Hello",
};
let computer = {
  cpu: 12,
  __proto__: tomHardware,
};
let lenevo = { screen: "HD" };

console.log(computer, computer.__proto__);
// {cpu: 12;} {hello: 'Hello'}

// {cpu: 12}
// ->cpu : 12
// ->[[Prototype]] : Object
// ->> hello : "Hello"
// ->>[[Prototype]] : Object

Object.setPrototypeOf(lenevo, computer);
console.log(Object.getPrototypeOf(computer));
// {cpu: 12;} {hello: 'Hello'}

// >> this method of setPrototypeOf and getPrototypeOf works on objects only ..........

function Drink(name) {
  if (!new.target) {
    throw Error("Use new Keyword..........");
  }
  this.name = name;
}

let tea = Drink("coffee"); 
// VM434:3 Uncaught Error: Use new Keyword..........
//     at Drink (<anonymous>:3:11)
//     at <anonymous>:8:11

// raise an  error

// Class and Objects

class Vechile {
  constructor(name ,maxSpeed, average) {
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.average = average;
  }
  start() {
    return `Hi I ${this.name} MaxSpeed is ${this.maxSpeed} mph and I runs ${this.average} miles per litre`;
  }
}
let v1 = new Vechile(78, 23);
console.log(v1);

// Inheritance

class Car extends Vechile {
  // if constructor is not wriiten in child class then it automatically calls the parent constructor
  info() {
    return `This a generic Car : ${this.start()}`;
  }
}

let car1 = new Car(100, 33);
console.log(car1.info());

// Inheritance in function

function Animal() {
  this.speak = function () {
    return `Animal speaking`;
  };
}

function Dog() {
  Animal.call(this); // Inherit constructor
  this.bark = function () {
    return `Woof!`;
  };
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let d1 = new Dog();
console.log(d1.bark());   // Woof!
console.log(d1.speak());  // Animal speaking

Encapsulation

// limiting the access of an property

class BankAccount {
  #balance = 0;
  getBalance() {
    return `My Balance is $${this.#balance}`;
  }
  setBalance(val) {
    this.#balance += val;
  }
}

let bank1 = new BankAccount();
console.log(bank1.getBalance());
bank1.setBalance(20000);
console.log(bank1.getBalance());

// Abstraction
// Hiding the implementation details

class CoffeeMachine{
  start(){
    return `Starting the machine`;
  }
  end(){
    return `Ending the machine`;
  }
}

let machine1 = new CoffeeMachine();
console.log(machine1.start(),machine1.end());

Polymorphism

class Bird {
  fly() {
    console.log(`Birds can fly`);
  }
}
class Penguin extends Bird {
  fly() {
    console.log(`Penguin's cannot fly`);
  }
}
let b1 = new Bird();
b1.fly();
let p1 = new Penguin();
p1.fly();

// Staic method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}
console.log(Calculator.add(5, 6));
console.log(typeof Calculator);
const chai = new User("chai.com", "1234asdf");
console.log(chai.email);

// In ES6 (JavaScript), a derived class constructor must call super() before accessing this because:
// super() sets up the this context from the parent class.
// Without it, this isn't initialized, leading to a runtime error.

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(length, breadth) {
    super();
    this.length = length;
    this.breadth = breadth;
  }
  area() {
    return this.length * this.breadth;
  }
}

let c1 = new Circle(5);
console.log(c1.area());

String.prototype.truelength = function(){
    return this.trim().length;
}

const obj = {
    name : "Karan",
    age : 22
}
Object.prototype.hello = function(){
    console.log("Hello");   
}
Object.hello();
