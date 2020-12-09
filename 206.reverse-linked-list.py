#
# @lc app=leetcode id=206 lang=python3
#
# [206] Reverse Linked List
#

# @lc code=start
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        newHead = ListNode()

        current = head
        while current != None:
            tempNext = newHead.next
            newHead.next = current
            
            current = current.next
            newHead.next.next = tempNext
        
        return newHead.next

# @lc code=end

