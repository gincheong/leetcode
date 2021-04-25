#
# @lc app=leetcode id=48 lang=python3
#
# [48] Rotate Image
#
from typing import List
# @lc code=start
class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        
        N = len(matrix)
        maxIdx = N
        for minIdx in range(len(matrix) // 2):
            # number of rectangles
            maxIdx -= 1
            for i in range(maxIdx - minIdx):
                pattern = [
                    [minIdx + i, maxIdx],
                    [maxIdx, maxIdx - i],
                    [maxIdx - i, minIdx],
                    [minIdx, minIdx + i]
                ]

                x, y = pattern[-1]
                prev = matrix[x][y]
                for nextCursor in pattern:
                    x, y = nextCursor
                    prev, matrix[x][y] = matrix[x][y], prev
            
# @lc code=end

"""
time: O(n^2)
space: O(1)

Solution의 3번 방법과 동일 
"""