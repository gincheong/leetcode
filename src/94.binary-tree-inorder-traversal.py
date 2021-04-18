#
# @lc app=leetcode id=94 lang=python3
#
# [94] Binary Tree Inorder Traversal
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
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        # 중위순회
        # 스스로 풀기는 했는데 솔루션의 다른 방법은 안 해봤음

        if not root:
            return []

        history = []
        stack = [root]

        count = 0
        while stack:
            node = stack.pop()
            if node.left:
                if node.left in history:
                    history.append(node)
                    if node.right:
                        stack.append(node.right)
                else:
                    stack.append(node)
                    stack.append(node.left)
            else:
                history.append(node)
                if node.right:
                    stack.append(node.right)

        for i in range(len(history)):
            history[i] = history[i].val
        return history


# @lc code=end

