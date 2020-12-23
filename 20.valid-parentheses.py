#
# @lc app=leetcode id=20 lang=python3
#
# [20] Valid Parentheses
#
from typing import List
# @lc code=start
class Solution:
    def isValid(self, s: str) -> bool:
        '''
        ( : 40, ) : 41
        [ : 91, ] : 93
        { : 123, } : 125
        '''
        stack = []
        
        for each in s:
            self.push_to_stack(stack, each)
        
        return False if stack else True

    def push_to_stack(self, stack: List[str], parenthesis: str) -> None:
        if len(stack) == 0:
            stack.append(parenthesis)
        else :
            if ord(stack[-1]) - ord(parenthesis) in [-1, -2]:
                stack.pop()
            else:
                stack.append(parenthesis)

# @lc code=end
