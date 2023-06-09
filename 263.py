class Solution:
    def isUgly(self, n: int) -> bool:
        if n <= 0:
            return False
        if n <= 6:
            return True
        
        return (n % 2 == 0 and self.isUgly(n // 2)) or (n % 3 == 0 and self.isUgly(n // 3)) or (n % 5 == 0 and self.isUgly(n // 5))

sol = Solution()
    
print(1, sol.isUgly(1))
print(5, sol.isUgly(5))
print(6, sol.isUgly(6))
print(4, sol.isUgly(4))
print(9, sol.isUgly(9))
print(30, sol.isUgly(30))
print(27, sol.isUgly(27))
print(-4, sol.isUgly(-4))
print(7, sol.isUgly(7))
print(420, sol.isUgly(420))
print(19, sol.isUgly(19))
print(21, sol.isUgly(21))
print(44, sol.isUgly(44))