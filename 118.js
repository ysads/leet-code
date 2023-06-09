// function assert(expected, given) {
//   if (expected ===)
// }

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var result = [],
    val = 1;

  for (var row = 0; row < numRows; row++) {
    result[row] = [];
    for (var col = 0; col <= Math.floor(row / 2); col++) {
      val = col > 0 ? result[row - 1][col - 1] + result[row - 1][col] : 1;
      result[row][col] = val;
      result[row][row - col] = val;
    }
  }
  return result;
};

console.warn(generate(1), [[1]]);

console.warn(generate(2), [[1], [1, 1]]);

console.warn(generate(4), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);

console.warn(generate(5), [
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 3, 3, 1],
  [1, 4, 6, 4, 1],
]);
