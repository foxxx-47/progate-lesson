const printWanko = () => { console.log("にんじゃわんこ"); };

const printHitsuji = () => { console.log("ひつじ仙人"); };

const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
};

call(printHitsuji);
