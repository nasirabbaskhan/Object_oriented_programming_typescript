// creating abstract class

abstract class country {
  public name: string;
  public language: string;
  public population: number;
  public populationGrowthRate: number;

  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number
  ) {
    this.name = name;
    this.language = language;
    this.population = population;
    this.populationGrowthRate = populationGrowthRate;
  }
  public abstract populationGrowth(): number;
  // it is a abstract method the only inilize in parent and define it in child class
}

class OICCountry extends country {
  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number
  ) {
    super(name, language, population, populationGrowthRate);
  }
  // it is abstrct method of parent class that have necessary to deine here
  public populationGrowth(): number {
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
