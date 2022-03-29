const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((number) => {return number % 2 === 0});
console.log(evenNumbers);

const characters = [
  {id: 1, name:"にんじゃわんこ", age: 14},
  {id: 2, name:"ベイビーわんこ", age: 5},
  {id: 3, name:"ひつじ仙人", age: 100}
];

const underTwenty = characters.filter((character) => {return character.age < 20});
console.log(underTwenty);