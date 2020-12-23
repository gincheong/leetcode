#
# @lc app=leetcode id=118 lang=python3
#
# [118] Pascal's Triangle
#
from typing import List
# @lc code=start
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        triangle = []
        prev = []
        for i in range(1, numRows + 1):
            row = [1 for _ in range(i)]
            for j in range(1, i - 1):
                row[j] = prev[j - 1] + prev[j]

            triangle.append(row)
            prev = row

        return triangle

# @lc code=end

