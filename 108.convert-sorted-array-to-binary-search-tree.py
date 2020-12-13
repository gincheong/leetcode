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
        return self.repeat(nums, 0, len(nums))            
    
    def repeat(self, nums: List[int], left: int, right: int) -> TreeNode:
        if left == right:
            return None

        half = (right + left) // 2

        node = TreeNode(nums[half])
        node.left = self.repeat(nums, left, half)
        node.right = self.repeat(nums, half + 1, right)

        return node


    #     leftNums, rootNum, rightNums = self.splitList(nums)

    #     rootNode = TreeNode(rootNum)
    #     rootNode.left = self.sortedArrayToBST(leftNums)
    #     rootNode.right = self.sortedArrayToBST(rightNums)

    #     return rootNode

    # def splitList(self, nums: List[int]) -> (List[int], int, List[int]):
    #     # split하면 총 시간이 O(nlogn)
    #     # 분할하는 데 logn, 분할한 각 항목에 대해 연산을 계속 실행하므로 결과적으로 nlogn

    #     half = len(nums) // 2

    #     left = nums[:half]
    #     center = nums[half]
    #     right = nums[half + 1:]

    #     return (left, center, right)

# @lc code=end

s = Solution()
s.sortedArrayToBST([-10,-3,0,5,9])