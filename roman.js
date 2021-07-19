function solution(num) {
  const romArr = [{ M: 1000 }, { CM: 900 }, { D: 500 }, { CD: 400 }, { C: 100 }, { XC: 90 }, { L: 50 }, { XL: 40 }, { X: 10 }, { IX: 9 }, { V: 5 }, { IV: 4 }, { I: 1 }];
  let romanized = "";

  romArr.forEach(({}, i) => {
    let value = Object.values(romArr[i]);
    let key = Object.keys(romArr[i]);
    while (value <= num) {
      romanized += key;
      num -= value;
    }
  });
  console.log(romanized);
  return romanized;
}
solution(1);
//DCCCXCIX
