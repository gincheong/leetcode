#
# @lc app=leetcode id=73 lang=python3
#
# [73] Set Matrix Zeroes
#
from typing import List
# @lc code=start
class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        row = [1 for _ in range(len(matrix))]
        col = [1 for _ in range(len(matrix[0]))]

        for i in range(len(row)):
            for j in range(len(col)):
                if matrix[i][j] == 0:
                    row[i] = 0
                    col[j] = 0

        
        for i in range(len(row)):
            for j in range(len(col)):
                if row[i] == 0 or col[j] == 0:
                    matrix[i][j] = 0

# @lc code=end

Solution.setZeroes(None, [[0,1,2,0],[3,4,5,2],[1,3,1,5]])

'''
여전히 O(m + n)임
정답 통과는 되었으나 best answer가 있다고 했음

다시 풀어볼 것
'''