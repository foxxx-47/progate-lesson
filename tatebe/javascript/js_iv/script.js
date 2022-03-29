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
class Animal {
  constructor() {
    console.log('インスタンスを生成しました');
  }
}

const animal = new Animal();