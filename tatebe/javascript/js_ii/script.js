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
const animals = ['dog', 'cat', 'sheep'];
console.log(animals);