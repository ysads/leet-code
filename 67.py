class Solution:
    def addBinary(self, a: str, b: str) -> str:
        digits = []
        carry = 0
        ia = len(a)-1
        ib = len(b)-1

        while ia >= 0 or ib >= 0:
            na = int(a[ia]) if ia >= 0 else 0
            nb = int(b[ib]) if ib >= 0 else 0

            digits.append((na + nb + carry) % 2)
            carry = (na + nb + carry) // 2

            ia -= 1
            ib -= 1

        if carry:
            digits.append(1)

        return  "".join(map(str, digits[::-1]))

sol = Solution()
print(sol.addBinary("01", "01")) # 10
print(sol.addBinary("11", "01")) # 100
print(sol.addBinary("111", "10")) # 1001
print(sol.addBinary("0111", "1110")) # 10101
print(sol.addBinary("11", "1")) # 100
print(sol.addBinary("1010", "1011")) # 10101