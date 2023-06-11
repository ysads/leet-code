from typing import List


class UnionFind:
    def __init__(self, n: int):
        self.items = [i for i in range(n)]
        self.size = [1 for i in range(n)]
        self.disj_sets = n

    def find(self, x: int) -> bool:
        x_parent = self.items[x]
        if x_parent != x:
            self.items[x] = self.find(x_parent)
            return self.items[x]
        else:
            return x
        
    def union(self, x: int, y: int):
        root_x = self.find(x)
        root_y = self.find(y)

        # already connected
        if root_x == root_y:
            return
        
        if self.size[root_x] < self.size[root_y]:
            self.size[root_x], self.size[root_y] = self.size[root_y], self.size[root_x]

        self.disj_sets -= 1
        self.items[root_y] = root_x
        self.size[root_x] += self.items[root_y]


class Solution:
    def findCircleNumUnionFind(self, isConnected: List[List[int]]) -> int:
        uf = UnionFind(len(isConnected))
        for i in range(len(isConnected)):
            for j in range(i):
                if isConnected[i][j]:
                    uf.union(i, j)
        return uf.disj_sets
    
    def findCircleNumDfs(self, isConnected: List[List[int]]) -> int:
        # TODO
        return 0
        
    
sol = Solution()
print(sol.findCircleNum([[1,1,0],[1,1,0],[0,0,1]])) # 2
print(sol.findCircleNum([[1,0,0],[0,1,0],[0,0,1]])) # 3