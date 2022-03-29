const numbers = [1, 3, 5, 7, 9];
const foundNumber = numbers.find((number) => {
  return number % 3 === 0;
});

console.log(foundNumber);

const characters = [
  {id: 1, name: "にんじゃわんこ", age: 6},
  {id: 2, name: "ベイビーわんこ", age: 2},
  {id: 3, name: "ひつじ仙人", age: 100},
  {id: 4, name: "とりずきん", age: 21}
];

const foundCharacter = characters.find((character) => {return character.id === 3});
console.log(foundCharacter);
