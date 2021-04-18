#
# @lc app=leetcode id=105 lang=python3
#
# [105] Construct Binary Tree from Preorder and Inorder Traversal
#
from typing import List, Dict
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
# @lc code=start
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        root_val = preorder[0]
        
        root_idx = inorder.index(root_val)
        left_preorder = preorder[1:root_idx + 1]
        left_inorder = inorder[:root_idx]

        right_preorder = preorder[root_idx + 1:]
        right_inorder = inorder[root_idx + 1:]

        print(left_preorder, right_preorder)
        print(left_inorder, right_inorder)

        # 아직 푸는중임

# @lc code=end

'''
[3,1,4,7,8,5,6]\n[4,1,7,3,5,8,6]
'''