// polymorphism

class country {
  public name: string;
  public language: string;
  public population: number;
  public populationGrowthRate: number;
  private _statePrivact: string;
  private _leader: string;
  public planet = "earth"; // sst bydefault that can not be channged later
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
    this._statePrivact = _statePrivact;
    this._leader = _leader;
    this.religion = religion;
  }
  public populationGrowth(): number {
    return 1;
  }

  public get privateData(): string {
    return this._statePrivact;
  }

  public get privateGetleader(): string {
    return this._leader;
  }

  public set privateSetleader(newleader: string) {
    this._leader = newleader;
  }

  // method that elaborate the polymorphism
  public greeting(): string {
    return "Hello";
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
    religion: "Islam"
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
  public populationGrowth(): number {
    this.population = this.population * (1 + this.populationGrowthRate / 100);
    return this.population;
  }
  // here greeting() method is the same as parent class but bave an other way
  //that is called mplymorphism
  // it is as same of method overriding
  public greeting(): string {
    return "Assalomooalakum";
  }
}

// object of child class
let pakistan = new OICCountry(
  "pakistan",
  "Urdu",
  300000000,
  2.5,
  "notning",
  "Imran Khan",
  "Islam"
);

// object of parant class
let china = new country(
  "China",
  "Mandarin",
  3200000000,
  1,
  "notning",
  "Imran Khan",
  "Islam"
);

console.log(pakistan.greeting());
console.log(china.greeting());
// it is example of polymorphism that the greeting method have more than one behaviour
// it return "Assalamooalaikum" in OICCountry class and it return "hello" in country class

export {};
