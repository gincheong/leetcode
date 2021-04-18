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
        
        reverse = None
        slow = fast = head

        # 노드 중앙위치를 구하는 반복문
        while fast and fast.next:
            fast = fast.next.next
            # fast는 두 칸씩 이동
            reverse, reverse.next, slow = slow, reverse, slow.next
            # slow는 한 칸씩 이동
            # reverse는 slow를 따라 역순으로 저장

            # fast가 전체 길이를 탐색할 때,
            # slow는 전체 길이 / 2를 탐색했을 것임, 이걸로 가운데 지점을 파악함

        # fast.next는 없는데, fast는 None이 아닌 경우?
        if fast:
            # fast를 두 칸씩 옮겼으므로, 전체 노드가 홀수 개인 경우 이쪽으로 들어오게 됨
            slow = slow.next
            # 정 가운데 노드를 제외하기 위해 slow도 한 칸 옮긴다
        
        while slow:
            if slow.val == reverse.val:
                pass
            else:
                return False
            slow = slow.next
            reverse = reverse.next
        return True

# @lc code=end

"""
time: O(n)인데
space: O(1)임
"""