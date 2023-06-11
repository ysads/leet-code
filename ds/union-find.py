class UnionFind:
    def __init__(self, n: int):
        self.items = [i for i in range(n+1)]
        self.size = [1 for i in range(n+1)]
        self.disj_sets = n+1

    def __str__(self) -> str:
        repr = ["{} [{}]".format(i, self.items[i]) for i in range(len(self.items))]
        return "uf> ({} sets) {}".format(self.disj_sets, repr)

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



uf = UnionFind(5)
print(uf)
print(uf.find(4))

uf.union(4, 2)
print(uf)

uf.union(2, 0)
print(uf)

uf.union(1, 3)
print(uf)

print("2.parent: ", uf.find(2))
uf.union(3, 2)
print(uf)

print("2.parent: ", uf.find(2))