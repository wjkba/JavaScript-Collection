class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
}
const car1 = new Car("Fiat", 1973, "red");
const car2 = new Car("Porsche", 2011, "blue");
const car3 = new Car("Volkswagen", 2005, "black");

//car2 is an object
changeColor(car2, "pink");
displayInfo(car2);

//functions
function displayInfo(car) {
  console.log(car.model);
  console.log(car.year);
  console.log(car.color);
}
function changeColor(car, color) {
  car.color = color;
}
