class Animal {
  alive = true;
  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";
  run() {
    console.log(`This ${this.name} is running`);
  }
}
class Fish extends Animal {
  name = "fish";
  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}
class Bird extends Animal {
  name = "bird";
  fly() {
    console.log(`This ${this.name} is flying`);
  }
}

//
rabbit1 = new Rabbit();
fish1 = new Fish();
bird1 = new Bird();
rabbit1.run();
fish1.swim();
console.log(fish1.alive);
bird1.fly();
bird1.eat();
