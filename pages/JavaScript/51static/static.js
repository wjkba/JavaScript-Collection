class Car {
  static numberOfCars = 0;
  constructor(model) {
    this.model = model;
    Car.numberOfCars += 1;
  }
  static startRace() {
    console.log(`GO!`);
  }
}

const car1 = new Car("Fiat");
const car2 = new Car("Porsche");
const car3 = new Car("Ferrari");

console.log(Car.numberOfCars);
console.log(Car.startRace());
