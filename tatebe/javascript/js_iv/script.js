class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('こんにちは');
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

const animal = new Animal('レオ', 3);
animal.info();

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  getHumanAge() {
    return this.age * 7;
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`犬種は${this.breed}です`);
    console.log(`${this.age}歳です`);
    console.log(`人間年齢で${this.getHumanAge()}歳です`);
  }
}
const dog = new Dog('レオ', 4, 'チワワ');
dog.info();