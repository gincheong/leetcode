#
# @lc app=leetcode id=234 lang=python3
#
# [234] Palindrome Linked List
#
from typing import List
# @lc code=start
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:


        values = []
        current = head
        while current != None:
            values.append(current.val)
            current = current.next

        return self.check(values)
    
    def check(self, stack: List) -> bool:
        for i in range(len(stack) // 2):
            print(stack[i], stack[-(i + 1)])
            if stack[i] != stack[-(i + 1)]:
                return False
        return True

"""
time: O(n)인데
space: O(n)임
"""

# @lc code=end