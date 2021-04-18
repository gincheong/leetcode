#
# @lc app=leetcode id=103 lang=python3
#
# [103] Binary Tree Zigzag Level Order Traversal
#
from typing import List
from collections import deque
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
# @lc code=start
class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []

        LEFT_TO_RIGHT = True
        RIGHT_TO_LEFT = False

        queue = deque([root])
        answer = []

        ORDER = LEFT_TO_RIGHT
        while queue:
            level = []
            temp = deque([])
            for _ in range(len(queue)):
                node = queue.pop()
                level.append(node.val)
                if ORDER == LEFT_TO_RIGHT:
                    temp.append(node.left) if node.left else None
                    temp.append(node.right) if node.right else None
                elif ORDER == RIGHT_TO_LEFT:
                    temp.append(node.right) if node.right else None
                    temp.append(node.left) if node.left else None
            ORDER = not ORDER
            queue = temp + queue
            answer.append(level)
        
        return answer

# @lc code=end
