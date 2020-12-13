#
# @lc app=leetcode id=102 lang=python3
#
# [102] Binary Tree Level Order Traversal
#
from collections import deque
from typing import List
# @lc code=start
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []

        answer = []
        stack = deque([root])
        while len(stack) > 0:
            temp = []
            print(stack)
            for i in range(len(stack)):
                current = stack.popleft()

                temp.append(current.val)
                
                if current.left:
                    stack.append(current.left)
                if current.right:
                    stack.append(current.right)
            answer.append(temp)
        
        return answer

# @lc code=end