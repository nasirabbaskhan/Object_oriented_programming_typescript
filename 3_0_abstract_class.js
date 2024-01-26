"use strict";
// creating abstract class
Object.defineProperty(exports, "__esModule", { value: true });
class country {
    constructor(name, language, population, populationGrowthRate) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
    }
}
class OICCountry extends country {
    constructor(name, language, population, populationGrowthRate) {
        super(name, language, population, populationGrowthRate);
    }
    // it is abstrct method of parent class that have necessary to deine here
    populationGrowth() {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population;
    }
}
let pakistan = new OICCountry("pakistan", "Urdu", 300000000, 2.5);
let dubai = new OICCountry("Abu Dubai", "Arabic", 6000000, 2);
// console.log(pakistan.language);
// console.log(pakistan.name);
console.log(pakistan.population);
console.log(pakistan.populationGrowthRate);
