"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class country {
    constructor(name, language, population, populationGrowthRate, _statePrivact, _leader, religion) {
        this.planet = "earth";
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this.religion = religion;
    }
    populationGrowth() {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population;
    }
}
class OICCountry extends country {
    constructor(name, language, population, populationGrowthRate, statePrivact, leader, religion // it set bydefaut that can not be changed
    ) {
        super(name, language, population, populationGrowthRate, statePrivact, leader, religion);
    }
}
let pakistan = new OICCountry("pakistan", "Urdu", 300000000, 2.5, "notning", "Imran Khan", "Islam");
console.log(pakistan.religion);
console.log(pakistan.planet);
