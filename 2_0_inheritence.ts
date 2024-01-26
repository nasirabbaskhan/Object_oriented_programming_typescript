class country {
  public name: string;
  public language: string;
  public population: number;
  public populationGrowthRate: number;
  public planet = "earth";
  public religion: string;

  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number,
    _statePrivact: string,
    _leader: string,
    religion: string
  ) {
    this.name = name;
    this.language = language;
    this.population = population;
    this.populationGrowthRate = populationGrowthRate;
    this.religion = religion;
  }
  populationGrowth(): number {
    this.population = this.population * (1 + this.populationGrowthRate / 100);
    return this.population;
  }
}

class OICCountry extends country {
  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number,
    statePrivact: string,
    leader: string,
    religion: "Islam" // it set bydefaut that can not be changed
  ) {
    super(
      name,
      language,
      population,
      populationGrowthRate,
      statePrivact,
      leader,
      religion
    );
  }
}

let pakistan = new OICCountry(
  "pakistan",
  "Urdu",
  300000000,
  2.5,
  "notning",
  "Imran Khan",
  "Islam"
);

console.log(pakistan.religion);
console.log(pakistan.planet);
