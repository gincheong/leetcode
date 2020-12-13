#
# @lc app=leetcode id=36 lang=python3
#
# [36] Valid Sudoku
#
from typing import List, Dict
# @lc code=start
from collections import defaultdict
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        ROW_LENGTH = 9
        COL_LENGTH = 9
        NUMBER_OF_BOXES = 9

        boxDicts = [defaultdict(int) for _ in range(NUMBER_OF_BOXES)]
        rowDicts = [defaultdict(int) for _ in range(ROW_LENGTH)]
        colDicts = [defaultdict(int) for _ in range(COL_LENGTH)]

        for rowIdx in range(ROW_LENGTH):
            for colIdx in range(COL_LENGTH):
                current = board[rowIdx][colIdx]
                if not current.isdigit():
                    continue

                boxIdx = (rowIdx // 3)*3 + (colIdx // 3)
                for each in [boxDicts[boxIdx], rowDicts[rowIdx], colDicts[colIdx]]:
                    if not self.countUsedNumber(each, current):
                        return False
        return True

    def countUsedNumber(self, dictionary: Dict[int, int], value: int) -> bool:
        if dictionary[value] > 0:
            return False
        else:
            dictionary[value] += 1
            return True

# @lc code=end

'''
time: O(1)
space: O(1)

배열 크기가 고정(9x9)이니까 n이 아니라고 한 듯?
'''
