from typing import List


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        actual_sum = sum(nums, start=0)
        expected_sum = (n+1)*n // 2

        return expected_sum - actual_sum


sol = Solution()
print(sol.missingNumber([3, 0, 1]))  # 2
print(sol.missingNumber([0, 1]))  # 2
print(sol.missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))  # 8
