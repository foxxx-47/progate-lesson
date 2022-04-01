const call = (callback) => { callback("にんじゃわんこ", 14); };

call((name, age) => {
  console.log(`${name}は${age}歳です。`);
});
