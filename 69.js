/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;
  let l = 1,
    r = x,
    m,
    floorSqrt;

  while (l <= r) {
    m = Math.floor((l + r) / 2);
    // This works for inexact squares - eg: x=8,17,... - where
    // a regular m*m === x would yield false.
    floorSqrt = Math.floor(x / m);
    if (m === floorSqrt) {
      return m;
    } else if (m > floorSqrt) {
      r = m - 1;
    } else if (m < floorSqrt) {
      l = m + 1;
    }
  }

  return r;
};

console.warn(0, mySqrt(0)); // 0
console.warn(1, mySqrt(1)); // 1
console.warn(4, mySqrt(4)); // 2
console.warn(8, mySqrt(8)); // 2
console.warn(15, mySqrt(15)); // 3
console.warn(17, mySqrt(17)); // 4
console.warn(64, mySqrt(64)); // 8
console.warn(2147395600, mySqrt(2147395600)); // 46340
