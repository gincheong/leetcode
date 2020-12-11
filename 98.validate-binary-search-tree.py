#
# @lc app=leetcode id=98 lang=python3
#
# [98] Validate Binary Search Tree
#

# @lc code=start
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        MIN_VALUE = -2**31 - 1
        MAX_VALUE = 2**31
        return self.validate(root, MIN_VALUE, MAX_VALUE)

    def validate(self, node: TreeNode, minVal: int, maxVal: int) -> bool:
        leftValidation = rightValidation = True

        if node:
            if node.val <= minVal or node.val >= maxVal:
                return False

            leftValidation = self.validate(node.left, minVal, node.val)
            rightValidation = self.validate(node.right, node.val, maxVal)

        return leftValidation and rightValidation

# @lc code=end