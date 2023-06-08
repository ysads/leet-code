/**
 * @param {number} x
 * @return {number}
 */
var isPerfectSquare = function (x) {
  if (x < 2) return x;
  let l = 1,
    r = x,
    m,
    sqr;

  while (l <= r) {
    m = Math.floor((l + r) / 2);
    // This works for inexact squares - eg: x=8,17,... - where
    // a regular m*m === x would yield false.
    sqr = m * m;
    if (sqr > x) {
      r = m - 1;
    } else if (sqr < x) {
      l = m + 1;
    } else {
      return true;
    }
  }

  return false;
};

console.warn(16, isPerfectSquare(16)); // true
console.warn(14, isPerfectSquare(14)); // false
