const TABLE = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var n = s.length,
    i = n - 1,
    num = TABLE[s[i]];

  for (i = n - 2; i >= 0; i--) {
    if (TABLE[s[i + 1]] > TABLE[s[i]]) {
      num -= TABLE[s[i]];
    } else {
      num += TABLE[s[i]];
    }
  }

  return num;
};

console.log(romanToInt("I")); // 1
console.log(romanToInt("MM")); // 2000
console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
console.log(romanToInt("MMLV")); // 2055
