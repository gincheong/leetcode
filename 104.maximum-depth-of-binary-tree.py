#
# @lc app=leetcode id=104 lang=python3
#
# [104] Maximum Depth of Binary Tree
#

# @lc code=start
# Definition for a binary tree node.
from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if root:
            l = r = 0
            if root.left:
                l = self.maxDepth(root.left)
            if root.right:
                r = self.maxDepth(root.right)
            
            return max(l, r) + 1
        return 0

# @lc code=end

