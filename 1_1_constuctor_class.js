"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class car2 {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }
}
let nasirCar = new car2("Black", 2023);
let myCar = new car2("Red", 2024);
console.log(`Nasir's car is ${nasirCar.color}`);
console.log(`my car is ${myCar.color}`);
console.log(`the model of Nasir's car is ${nasirCar.model}`);
console.log(`The model of my car is ${myCar.model}`);
// class property and optional class property
class car3 {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }
}
// Read Only property means these property can not change after creating
class car4 {
    constructor(color, model, carID, location) {
        this.color = color;
        this.model = model;
        this.carID = carID;
        this.location = location;
    }
}
let obj1 = new car4("green", 2021, "0001");
let obj2 = new car4("red", 2022, "0431", "pakistan");
console.log(obj1.color); // green
// obj1.carID="6777" error because it can not be changed Read Only property after creating
obj1.color = "red"; // ok
obj1.location = "India"; // ok
console.log(obj1.color); //red
