class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age); // refers to the parent class Animal
    this.runSpeed = runSpeed;
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age); // refers to the parent class Animal
    this.swimSpeed = swimSpeed;
  }
}
class Bird extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age); // refers to the parent class Animal
    this.flySpeed = flySpeed;
  }
}

//
const bird = new Bird("Steve", 2, 120);
console.log(bird.name);
console.log(bird.age);
console.log(bird.flySpeed);
