from typing import Optional


class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        nA = headA
        nB = headB
        addrIds = set()

        while nA:
            addrIds.add(nA)
            nA = nA.next

        while nB:
            if nB in addrIds:
                return nB
            nB = nB.next 

        return None
    
node = ListNode(1)
l1 = node
l2 = node

print(Solution.getIntersectionNode(None, l1, l2))