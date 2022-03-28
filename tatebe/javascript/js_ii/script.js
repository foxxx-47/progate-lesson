// 1. 変数の復習
// let number = 0;
number += 1;
console.log(number);

number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);

// 2. while文
// let number = 1;

while (number <= 100) {
  console.log(number);
  number += 1;
}

// 3. for文
for (let number = 1; number <= 100; number++) {
  console.log(number);
}

// 4. 繰り返し処理のまとめ
for (let number = 1; number <= 100; number++) {
  if (number % 3 === 0) {
    console.log('3の倍数です');
  } else {
    console.log(number);
  };
}

// 5. 配列とは
// const animals = ['dog', 'cat', 'sheep'];
console.log(animals);

// 6. 配列の要素の取得
console.log(animals[0]);
console.log(animals[2]);

// 7. 配列の要素の更新
// animals[2] = 'rabbit';
console.log(animals[2]);


// 8. 配列と繰り返し（1）
for (let i = 0; i < 3; i++) {
  console.log(animals[i]);
}

// 9. 配列と繰り返し（2）
const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];
console.log(animals.length);

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}


// 10. オブジェクトとは
const character = {
  name: 'にんじゃわんこ',
  age: 14,
};
console.log(character);

// 11. オブジェクトの値の取得・更新
console.log(character.name);
character.age = 20;
console.log(character);

// 12. オブジェクトを要素に持つ配列（1）
// const characters = [
//   {name: "にんじゃわんこ", age: 14},
//   {name: "ひつじ仙人", age: 1000},
// ];

console.log(characters[0]);
console.log(characters[1].name);

// 13. オブジェクトを要素に持つ配列（2）
// const characters = [
//   {name: "にんじゃわんこ", age: 14},
//   {name: "ひつじ仙人", age: 100},
//   {name: "ベイビーわんこ", age: 5},
// ];

for (let i = 0; i < characters.length; i++) {
  const character = characters[i];
  console.log(`名前は${character.name}です`);
  console.log(`${character.age}歳です`);
}

// 14. undefinedとは
// const characters = [
//   {name: "にんじゃわんこ", age: 14},
//   {name: "ひつじ仙人", age: 100},
//   {name: "ベイビーわんこ", age: 5},
//   {name: "とりずきん"},
// ];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`名前は${character.name}です`);
  console.log(`${character.age}歳です`);
}

// 15. undefinedの対応
const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
  {name: "とりずきん"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  const character = characters[i];
  console.log(`名前は${character.name}です`);
  
  if(character.age === undefined) {
    console.log("年齢は秘密です");
  } else {
    console.log(`${character.age}歳です`);
  }
}
