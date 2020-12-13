#
# @lc app=leetcode id=101 lang=python3
#
# [101] Symmetric Tree
#
from typing import List
# @lc code=start
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        # recursively
        # if not root:
        #     return True
        # return self.compare_recursive(root.left, root.right)

        # iteratively
        if not root:
            return True
        stack = [root.left, root.right]

        while len(stack) > 0:
            node1 = stack.pop()
            node2 = stack.pop()
            if not node1 and not node2:
                continue
            if not node1 or not node2:
                return False
            
            if node1.val == node2.val:
                stack.append(node1.left)
                stack.append(node2.right)
                
                stack.append(node1.right)
                stack.append(node2.left)
            else:
                return False
        return True

    def compare_recursive(self, node1: TreeNode, node2: TreeNode) -> bool:
        if not node1 and not node2:
            # 둘 다 None인 경우
            return True
            
        if not node1 or not node2:
            # 둘 다 None인 경우를 제외하고, 둘 중 하나만 None이면
            return False

        if node1.val == node2.val:
            return self.compare(node1.left, node2.right) and self.compare(node2.left, node1.right)
        else:
            return False

# @lc code=end
'''
[1,2,2,null,3,null,3]
'''