"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""


from collections import deque


class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []


def clone_rec(node, cloned):
    if not node:
        return
    if node.val in cloned:
        return

    node_copy = Node(node.val, [])
    cloned[node.val] = node_copy

    for v in node.neighbors:
        clone_rec(v, cloned)
        node_copy.neighbors.append(cloned[v.val])

    return node_copy


class Solution:
    def cloneGraphDfs(self, node: 'Node') -> 'Node':
        return clone_rec(node, {})

    def cloneGraphBfs(self, head: Node) -> Node:
        if not head:
            return

        cloned = {}
        cloned[head.val] = Node(head.val, [])
        queue = deque([head])

        while len(queue):
            curr = queue.popleft()
            for v in curr.neighbors:
                if v.val not in cloned:
                    cloned[v.val] = Node(v.val, [])
                    queue.append(v)
                cloned[curr.val].neighbors.append(cloned[v.val])

        return cloned[head.val]


def print_graph(node: Node):
    visited = {}

    def print_rec(n):
        if n.val in visited:
            return

        visited[n.val] = list(map(lambda v: v.val, n.neighbors))
        for v in n.neighbors:
            print_rec(v)

    if node:
        print_rec(node)
    print(visited)


def test1():
    n1 = Node(1)
    n2 = Node(2)
    n3 = Node(3)
    n4 = Node(4)

    n1.neighbors = [n2, n4]
    n2.neighbors = [n1, n3]
    n3.neighbors = [n2, n4]
    n4.neighbors = [n1, n3]
    return n1


def test2():
    return Node(1)


def test3():
    n1 = Node(1)
    n2 = Node(2)
    n3 = Node(3)
    n1.neighbors = [n2, n3]
    n2.neighbors = [n1]
    n3.neighbors = [n1]
    return n1


sol = Solution()
print_graph(sol.cloneGraphBfs(test1()))
print_graph(sol.cloneGraphBfs(test2()))
print_graph(sol.cloneGraphBfs(test3()))
print_graph(sol.cloneGraphBfs(None))
