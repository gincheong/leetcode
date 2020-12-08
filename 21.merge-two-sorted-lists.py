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
        prev = head

        # get minValue
        if l1 == None and l2 == None:
            return None
        elif l1 == None:
            minValue = l2.val
        elif l2 == None:
            minValue = l1.val
        else:
            minValue = min(l1.val, l2.val)

        for number in range(minValue, 100 + 1):
            while l1 != None and l1.val == number:
                prev.next = l1
                prev = l1
                l1 = l1.next

            while l2 != None and l2.val == number:
                prev.next = l2
                prev = l2
                l2 = l2.next

            if l1 == None and l2 == None:
                break
        
        return head.next

# @lc code=end