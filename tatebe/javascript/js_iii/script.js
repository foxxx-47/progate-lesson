// 1. 関数とは（1）
// const greet = function() {
//   console.log("こんにちは！");
//   console.log("関数を学習していきましょう！");
// };
// greet();

// 2. 関数とは（2）
const hello = function() {
  console.log("こんにちは！");
  console.log("私の名前はたてべです");
}
hello();

// 3. アロー関数
// const greet = () => {
//   console.log("こんにちは！");
// }
// greet();

// 4. 引数とは
const greet = (name) => {
  console.log(`こんにちは、${name}さん`);
}
greet("ひつじ仙人");

// 5. 複数の引数を受け取る関数
const add = (number1, number2) => {
  console.log(number1 + number2);
};
add(5, 7);

// 5. 戻り値とは
const half = (number) => {
  return number / 2;
};
const result = half(130);
console.log(`130の半分は${result}です`);