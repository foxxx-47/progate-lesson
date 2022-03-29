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

}
const dog = new Dog('レオ', 4);
dog.info();