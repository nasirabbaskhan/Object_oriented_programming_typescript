"use strict";
// encapsulation
Object.defineProperty(exports, "__esModule", { value: true });
class country {
    constructor(name, language, population, populationGrowthRate, _statePrivact, _leader) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this._statePrivact = _statePrivact;
        this._leader = _leader;
    }
    // this is geter method to access the private data from outside the class
    // set meted have return type but not parameter
    // this is known the encapsulation method of object oriented programming
    get privateData() {
        return this._statePrivact;
    }
    get privateGetleader() {
        return this._leader;
    }
    // this is seter method to access the private data from outside the class by setting your values
    // set meted have parameter but not return type
    set privateSetleader(newleader) {
        this._leader = newleader;
    }
}
class OICCountry extends country {
    constructor(name, language, population, populationGrowthRate, statePrivact, leader) {
        super(name, language, population, populationGrowthRate, statePrivact, leader);
    }
    populationGrowth() {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population;
    }
}
let pakistan = new OICCountry("pakistan", "Urdu", 300000000, 2.5, "notning", "Imran Khan");
console.log(pakistan.privateData); // nothing
console.log(pakistan.privateGetleader); // imran khan
console.log((pakistan.privateSetleader = "Nasir Abbas")); // getting the private data by set value
