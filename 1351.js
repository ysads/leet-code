var countNegatives = function(grid) {
  var m = grid.length,
      n = grid[0].length,
      row = m-1,
      col = 0,
      cnt = 0

  while (row >= 0 && col < n) {
    if (grid[row][col] < 0) {
      cnt += n-col
      row--
    } else {
      col++
    }
  }
  return cnt
}

console.warn(countNegatives([
  [3,2],
  [1,0]
])) // 0
console.warn(countNegatives([
  [ 4, 3, 2,-1],
  [ 3, 2, 1,-1],
  [ 1, 1,-1,-2],
  [-1,-1,-2,-3]
])) // 8
console.warn(countNegatives([
  [4,   1,  0, -1, -1, -1, -1],
  [2,   1, -1, -1, -1, -1, -1],
  [1,  -2, -1, -1, -1, -1, -1],
  [-1, -2, -2, -2, -2, -2, -2],
])) // 22
console.warn(countNegatives([
  [4,   1,  0,  0,  0, -1, -1],
  [2,   1, -1, -1, -1, -1, -1],
  [1,  -2, -1, -1, -1, -1, -1],
  [-1, -2, -2, -2, -2, -2, -2],
])) // 20