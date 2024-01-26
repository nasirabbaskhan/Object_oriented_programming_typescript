// encapsulation

abstract class country {
  public name: string;
  public language: string;
  public population: number;
  public populationGrowthRate: number;
  private _statePrivact: string; //it is private parameter that start from _underscore
  private _leader: string;

  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number,
    _statePrivact: string,
    _leader: string
  ) {
    this.name = name;
    this.language = language;
    this.population = population;
    this.populationGrowthRate = populationGrowthRate;
    this._statePrivact = _statePrivact;
    this._leader = _leader;
  }
  public abstract populationGrowth(): number;

  // this is geter method to access the private data from outside the class
  // set meted have return type but not parameter
  // this is known the encapsulation method of object oriented programming
  public get privateData(): string {
    return this._statePrivact;
  }

  public get privateGetleader(): string {
    return this._leader;
  }
  // this is seter method to access the private data from outside the class by setting your values
  // set meted have parameter but not return type
  public set privateSetleader(newleader: string) {
    this._leader = newleader;
  }
}

class OICCountry extends country {
  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number,
    statePrivact: string,
    leader: string
  ) {
    super(
      name,
      language,
      population,
      populationGrowthRate,
      statePrivact,
      leader
    );
  }
  public populationGrowth(): number {
    this.population = this.population * (1 + this.populationGrowthRate / 100);
    return this.population;
  }
}

let pakistan = new OICCountry(
  "pakistan",
  "Urdu",
  300000000,
  2.5,
  "notning",
  "Imran Khan"
);

console.log(pakistan.privateData); // nothing
console.log(pakistan.privateGetleader); // imran khan
console.log((pakistan.privateSetleader = "Nasir Abbas")); // getting the private data by set value
