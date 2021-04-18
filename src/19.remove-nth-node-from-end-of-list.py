#
# @lc app=leetcode id=19 lang=python3
#
# [19] Remove Nth Node From End of List
#

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# @lc code=start
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        dummy = ListNode(val=0, next=head)
        left = dummy
        right = dummy

        # 두 포인터의 거리를 n만큼 유지
        for _ in range(n):
            right = right.next

        while right.next != None:
            right = right.next
            left = left.next

        left.next = left.next.next
        # 한 칸 건너뛰기

        return dummy.next

# @lc code=end
