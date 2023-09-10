// Objects
const car = {
  model: "Fiat",
  color: "red",
  year: 1973,

  drive: function () {
    console.log("You drive the car");
  },
  break: function () {
    console.log("You step on the brakes");
  },
};

//Access properties of an object
car.model; // Fiat
car.color; // red
car.year; // 1973

//Invoke methods within car1 object
car.drive();
car.break();
