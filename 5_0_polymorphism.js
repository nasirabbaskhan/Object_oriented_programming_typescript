"use strict";
// polymorphism
Object.defineProperty(exports, "__esModule", { value: true });
class country {
    constructor(name, language, population, populationGrowthRate, _statePrivact, _leader, religion) {
        this.planet = "earth"; // sst bydefault that can not be channged later
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this._statePrivact = _statePrivact;
        this._leader = _leader;
        this.religion = religion;
    }
    populationGrowth() {
        return 1;
    }
    get privateData() {
        return this._statePrivact;
    }
    get privateGetleader() {
        return this._leader;
    }
    set privateSetleader(newleader) {
        this._leader = newleader;
    }
    // method that elaborate the polymorphism
    greeting() {
        return "Hello";
    }
}
class OICCountry extends country {
    constructor(name, language, population, populationGrowthRate, statePrivact, leader, religion) {
        super(name, language, population, populationGrowthRate, statePrivact, leader, religion);
    }
    populationGrowth() {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population;
    }
    // here greeting() method is the same as parent class but bave an other way
    //that is called mplymorphism
    // it is as same of method overriding
    greeting() {
        return "Assalomooalakum";
    }
}
// object of child class
let pakistan = new OICCountry("pakistan", "Urdu", 300000000, 2.5, "notning", "Imran Khan", "Islam");
// object of parant class
let china = new country("China", "Mandarin", 3200000000, 1, "notning", "Imran Khan", "Islam");
console.log(pakistan.greeting());
console.log(china.greeting());
