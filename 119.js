const memo = [];

function fact(n) {
  if (n === 0) return 1;
  if (n < 2) return n;

  if (memo[n] === undefined) {
    memo[n] = n * fact(n - 1);
  }

  return memo[n];
}

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  var n = rowIndex,
    result = [];

  for (var k = 0; k <= Math.floor(n / 2); k++) {
    var coefficient = fact(n) / (fact(k) * fact(n - k));
    result[k] = coefficient;
    result[n - k] = coefficient;
  }
  return result;
};
