// The Object contains brief information about my country
const myCountry = {
  country: "Vietnam",
  capital: "Hanoi",
  language: "Vietnamese",
  population: 100.3, // in million
  neighbours: ["China", "Laos", "Cambodia"],
  // Adds a method named 'describe' to object myCountry
  describe: function () {
    let retstr = `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbours countries and a capital called ${this.capital}.`;
    console.log(retstr);
    // The following 'return' statement is added for an illustration on this page
    return retstr;
  },
  // Adds a method named 'checkIsland' to the object myCountry
  checkIsland: function () {
    // Adds a property named 'isIsland' to object myCountry
    this.isIsland = this.neighbours.length == 0;
    // The following 'return' statement is added for an illustration on this page
    return this.neighbours.length == 0;
  },
};
