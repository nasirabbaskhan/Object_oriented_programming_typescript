class car5 {
  constructor(color: string, model: number, carID: string, location?: string) {
    this.color = color;
    this.model = model;
    this.carID = carID;
    this.location = location;
  }
  readonly carID: string;
  color: string;
  model: number;
  location?: string;
}

// extended car5 class without constructor

class Mercedes extends car5 {
  alloyWheels = true;
  adjustableSuspension = true;
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
  constructor(
    color: string,
    model: number,
    carID: string,
    alloyWheel: boolean,
    adjustableSuspension: boolean
  ) {
    super(color, model, carID);
    this.alloyWheel = alloyWheel;
    this.adjustableSuspension = adjustableSuspension;
  }
  alloyWheel: boolean;
  adjustableSuspension: boolean;
}
let HondaCevicObj = new HondaCevic("white", 2024, "1A", true, true);
console.log(HondaCevicObj.adjustableSuspension);
console.log(HondaCevicObj.alloyWheel);
console.log(HondaCevicObj.carID);
console.log(HondaCevicObj.color);
console.log(HondaCevicObj.model);
