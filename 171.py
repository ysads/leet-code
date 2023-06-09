class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
      ORD_A = ord('A')
      num = 0
      n = len(columnTitle)
      for idx in range(n-1, -1, -1):
        ord_c = ord(columnTitle[idx]) - ORD_A + 1
        num += ord_c * 26 ** (n-idx-1)
      return num

sol = Solution()

print("A", sol.titleToNumber("A")) # 1
print("AB", sol.titleToNumber("AB")) # 28
print("ZY", sol.titleToNumber("ZY")) # 701