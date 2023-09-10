class Car {
  constructor(power, gas) {
    this._power = power;
    this._gas = gas;
  }
  //when Car.power is accessed 'get' binds it to the following function:
  get power() {
    return `${this._power}hp`;
  }
  //when Car.gas is accessed 'get' binds it to the following function:
  get gas() {
    return `${this._gas}L (${(this._gas / 50) * 100}% GAS)`;
  }
  //when Car.value is changed 'set' binds it to the following function:
  set gas(value) {
    if (value > 50) {
      value = 50;
    } else if (value < 0) {
      value = 0;
    }
    this._gas = value;
  }
}

let car1 = new Car(200, 10);
car1.gas = 2;
console.log(car1.power);
console.log(car1.gas);
