"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class car5 {
    constructor(color, model, carID) {
        this.color = color;
        this.model = model;
        this.carID = carID;
    }
    run(state) {
        if (state === true) {
            console.log("Car5 is on");
        }
        else {
            console.log("car5 is off");
        }
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
    // here run() methd is overriding of parent's run() method
    run(state) {
        if (state === true) {
            console.log("HondaCevic is on");
        }
        else {
            console.log("HondaCevic is off");
        }
    }
}
let HondaCevicObj1 = new HondaCevic("white", 2024, "1A", true, true);
console.log(HondaCevicObj1.adjustableSuspension);
console.log(HondaCevicObj1.alloyWheel);
console.log(HondaCevicObj1.carID);
console.log(HondaCevicObj1.color);
console.log(HondaCevicObj1.model);
HondaCevicObj1.run(true);
