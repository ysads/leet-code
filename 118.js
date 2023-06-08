/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var result = [];
  for (var row = 1; row <= numRows; row++) {
    result.push(Array(row).fill(1));
    for (var col = 1; col <= Math.floor(row / 2); col++) {
      result[row][col] = ;
    }
  }
};

console.warn(generate(1), [[1]]);

console.warn(generate(2), [[1], [1, 1]]);

console.warn(generate(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);

console.warn(generate(5), [
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 3, 3, 1],
  [1, 4, 6, 4, 1],
]);
