"use strict";
//---------inheritence--abstraction--polymorphysim--and-encapsultion------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
class Operation {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
}
//addition class
class Addition extends Operation {
    constructor(a, b, num3) {
        super(a, b);
        this.num3 = num3;
    }
    execute() {
        return this.num1 + this.num2 + this.num3;
    }
}
const add = new Addition(12, 4, 6);
console.log("The Addition of two numbers=", add.execute());
// substruction class
class substruction extends Operation {
    // here is not need to using the constructer if child calss have not paremeter
    execute() {
        return this.num1 - this.num2;
    }
}
const sub = new substruction(12, 5);
console.log("The difference of two numbers=", sub.execute());
//multiplication class
class Multiplication extends Operation {
    execute() {
        return this.num1 * this.num2;
    }
}
const multi = new Multiplication(12, 4);
console.log("The multiplication of two numbers=", multi.execute());
//division class
class Division extends Operation {
    execute() {
        return this.num1 / this.num2;
    }
}
const div = new Division(12, 4);
console.log("The Division of two numbers=", div.execute());
//1:subtct, addition, multiplication,and division classes(child classes) are inherits
//properties of operation class (parent class).. this is called inheritence
//2:execute() method is only dine in parent class by using abstracy keyword and
// initializing in each og parent class necesserilly..this is called  abstraction
//3:execute() method is behave differently(multiple ways) in subtct, addition, multiplication, and division child class... this behaviour is called polymorphism
//4 set the num3 as private in subtract child class that can not be access from outside the class that is known encapsulation
