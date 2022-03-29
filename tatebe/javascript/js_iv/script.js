// 1. オブジェクトの復習
// const animal = {
//   name: 'レオ',
//   age: 3,
//   greet: () => {
//     console.log('こんにちは');
//   },
// };

console.log(animal.name);
animal.greet();

// 2. クラスとは
// class Animal {}

// 3. インスタンスの生成
// const animal = new Animal();
console.log(animal);

// 4. コンストラクタ（1）
// class Animal {
//   constructor() {
//     console.log('インスタンスを生成しました');
//   }
// }

// const animal = new Animal();

// 5. コンストラクタ（2）
// class Animal {
//   constructor() {
//     this.name = 'レオ';
//     this.age = 3;
//   }
// }

// const animal = new Animal();
// console.log(`名前:${animal.name}`);
// console.log(`年齢:${animal.age}`);

// 6. コンストラクタ（3）
// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const animal = new Animal('モカ', 8);
// console.log(`名前:${animal.name}`);
// console.log(`年齢:${animal.age}`);

// 7. メソッド（1）
// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log('こんにちは');
//   }
// }

// const animal = new Animal('レオ', 3);
// console.log(`名前:${animal.name}`);
// console.log(`年齢:${animal.age}`);
// animal.greet();

// 8. メソッド（2）
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('こんにちは');
  }

  info() {
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

const animal = new Animal('レオ', 3);
animal.greet();
animal.info();