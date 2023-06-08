/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var n = nums.length,
      compl = {}
  
  for (var i = 0; i < n; i++) {
    if (compl[nums[i]] !== undefined) {
      return [compl[nums[i]], i]
    } else {
      compl[target - nums[i]] = i
    }
  }
};

console.warn(twoSum([2,7,11,15], 9)) // [0,1]
console.warn(twoSum([3,2,4], 6)) // [1,2]
console.warn(twoSum([3,3], 6)) // [0,1]
console.warn(twoSum([1,2,3,4,5,6,7,8,9], 10)) // [3,5]