// 1
console.log("「ES6 学習コース」へようこそ！");
console.log("にんじゃわんこと一緒にES6を学んでいきましょう。");

// 2
console.log('Hello World');
console.log('にんじゃわんこ');

// console.log("この行をコメントアウトしてください");

// 3
console.log(5 + 3);
console.log(20 - 8);
console.log('4 + 5');

// 4. 計算してみよう2
console.log(8 * 4);
console.log(24 / 4);
console.log(7 % 2);

// 5. 文字列の連結
console.log("ひつじ" + "仙人");
console.log("20" + "15");

// 6. 変数とは
let name = "にんじゃわんこ";
console.log(name);

// 7. 変数の特徴
let length = 5;
console.log(length);

console.log(length * length * 3);

// 8. 変数の値の更新（1）
console.log(name);

name = "とりずきん";
console.log(name);


// 9. 変数の値の更新（2）
let number = 7;
console.log(number);

// 変数numberの値に3を加えてください
number += 3;
console.log(number);

// 変数numberの値を2で割ってください
number /= 2;
console.log(number);

// 10. 定数とは
const language = "フランス語";
console.log(language);
console.log(language + "を話せます");

// 11. テンプレートリテラル
// const age = 14;
console.log(`ぼくの名前は${name}です`);
console.log(`今は${age}歳です`);

// 12. if文
const level = 12;
if (level > 10) {console.log("レベルが10より大きいです");};


// 13. 真偽値と比較演算子（1）
// const age = 24;
console.log(age >= 20);
console.log(age < 20);

if(age >= 20) {console.log('私は20歳以上です');};

// 14. 真偽値と比較演算子（2）
const password = "ninjawanko";

if (password === 'ninjawanko') {
  console.log('ログインに成功しました');
};
if(password !== 'ninjawanko') {
  console.log('パスワードが間違っています');
};

// 15. else
// const age = 17;

if (age >= 20) {
  console.log("私は20歳以上です");
} else {
  console.log("私は20歳未満です");
}

// 16. else if
// const age = 17;

if (age >= 20) {
  console.log("私は20歳以上です");
} else if(age >= 10) {
  console.log("私は20歳未満ですが、10歳以上です");
} else {
  console.log("私は10歳未満です");
}

// 17. 複数の条件式
const age = 24;

if (age >= 20 && age < 30 ) {
  console.log("私は20代です");
}

// 18. switch文（1）
const n = 2;

switch (n) {
  case 1:
    console.log("大吉です");
    break;
  case 2:
    console.log("吉です");
    break;
  case 3:
    console.log("小吉です");
    break;
}