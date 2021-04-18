#
# @lc app=leetcode id=2 lang=python3
#
# [2] Add Two Numbers
#

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
# @lc code=start
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        number1 = ""
        number2 = ""

        while l1 != None:
            number1 = str(l1.val) + number1
            l1 = l1.next

        while l2 != None:
            number2 = str(l2.val) + number2
            l2 = l2.next

        number_list = list(str(int(number1) + int(number2)))

        root = ListNode()
        current_node = root

        while len(number_list) > 0:
            current_number = number_list.pop()
            current_node.next = ListNode(current_number)
            current_node = current_node.next

        return root.next

# @lc code=end
