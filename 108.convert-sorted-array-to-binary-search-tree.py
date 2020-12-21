#
# @lc app=leetcode id=108 lang=python3
#
# [108] Convert Sorted Array to Binary Search Tree
#
from typing import List
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
# @lc code=start
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        return self.repeat(nums)

    def repeat(self, nums: List[int]) -> TreeNode:
        if len(nums) == 0:
            return None
        half = len(nums) // 2

        left = nums[:half]
        center = nums[half]
        right = nums[half + 1:]

        node = TreeNode(center)
        node.left = self.repeat(left)
        node.right = self.repeat(right)

        return node

# @lc code=end

s = Solution()
s.sortedArrayToBST([-10,-3,0,5,9])