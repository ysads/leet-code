from typing import List

# Uses "Tortoise and Hare" algorithm to find a cycle in the graph
# Reasoning: https://keithschwarz.com/interesting/code/?dir=find-duplicate
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        slow = nums[0]
        fast = nums[nums[0]]

        while slow != fast:
            slow = nums[slow]
            fast = nums[nums[fast]]

        finder = 0
        while slow != finder:
            slow = nums[slow]
            finder = nums[finder]

        return finder

sol = Solution()
print(sol.findDuplicate([2,2,2])) # 2
print(sol.findDuplicate([1,3,4,2,2])) # 2
print(sol.findDuplicate([3,1,3,4,2])) # 3