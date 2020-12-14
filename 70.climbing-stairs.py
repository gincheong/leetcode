#
# @lc app=leetcode id=70 lang=python3
#
# [70] Climbing Stairs
#
from typing import List
# @lc code=start
class Solution:
    def climbStairs(self, n: int) -> int:
        
        '''O(logn)시간'''
        operand = [
            [1, 1],
            [1, 0]
        ]
        matrix = [
            [1, 1],
            [1, 0]
        ]

        for _ in range(n):
            matrix = self.square_matrix(matrix, operand)
        
        return matrix[1][0]

        
        ''' 이건 O(n)시간'''
        # if n == 1:
        #     return 1
        # elif n == 2:
        #     return 2

        # a = 1
        # b = 2
        
        # for _ in range(n - 2):
        #     answer = a + b
        #     a, b = b, answer
        # return answer

    
    def square_matrix(self, a: List[List[int]], b: List[List[int]]) -> None:
        '''calculate square of matrix'''
        size = len(a)
        temp = [[0, 0], [0, 0]]
        
        for i in range(size):
            for j in range(size):
                for k in range(size):
                    temp[i][j] += a[i][k] * b[k][j]
        
        return temp


       
# @lc code=end