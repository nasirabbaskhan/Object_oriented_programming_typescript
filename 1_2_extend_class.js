"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class car5 {
    constructor(color, model, carID, location) {
        this.color = color;
        this.model = model;
        this.carID = carID;
        this.location = location;
    }
}
// extended car5 class without constructor
class Mercedes extends car5 {
    constructor() {
        super(...arguments);
        this.alloyWheels = true;
        this.adjustableSuspension = true;
    }
}
let mercedesObj = new Mercedes("white", 2024, "1A");
// console.log(mercedesObj.adjustableSuspension);
// console.log(mercedesObj.alloyWheels);
// console.log(mercedesObj.carID);
// console.log(mercedesObj.color);
// console.log(mercedesObj.location);
// console.log(mercedesObj.model);
// extended car5 class with constructor
class HondaCevic extends car5 {
    constructor(color, model, carID, alloyWheel, adjustableSuspension) {
        super(color, model, carID);
        this.alloyWheel = alloyWheel;
        this.adjustableSuspension = adjustableSuspension;
    }
}
let HondaCevicObj = new HondaCevic("white", 2024, "1A", true, true);
console.log(HondaCevicObj.adjustableSuspension);
console.log(HondaCevicObj.alloyWheel);
console.log(HondaCevicObj.carID);
console.log(HondaCevicObj.color);
console.log(HondaCevicObj.model);
