#
# @lc app=leetcode id=21 lang=python3
#
# [21] Merge Two Sorted Lists
#
from typing import List
# @lc code=start
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:

        head = ListNode(0)        
        current = head

        while l1 != None and l2 != None:
            # 둘 중 한 연결리스트라도 다 탐색하면 종료

            if l1.val < l2.val:
                current.next = l1
                l1 = l1.next
            else:
                current.next = l2
                l2 = l2.next
            current = current.next
        
        current.next = l1 or l2
        # 둘 중 하나가 None이면 None 아닌 쪽이 반환됨

        return head.next
# @lc code=end