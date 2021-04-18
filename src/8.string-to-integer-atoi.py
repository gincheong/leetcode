#
# @lc app=leetcode id=8 lang=python3
#
# [8] String to Integer (atoi)
#

# @lc code=start
class Solution:
    def myAtoi(self, s: str) -> int:
        INT_MIN = -2**31
        INT_MAX = 2**31 - 1

        MINUS_FLAG = 1
        IS_SIGNED = False
        BREAK_FLAG = False

        number = 0
        for char in s:
            if char in ['-', '+']:
                if BREAK_FLAG or IS_SIGNED:
                    break
                if char == '-':
                    MINUS_FLAG = -1
                
                IS_SIGNED = True
                BREAK_FLAG = True
            elif char.isdigit():
                number = (number * 10) + int(char)
                
                BREAK_FLAG = True
            elif char == ' ':
                if BREAK_FLAG:
                    break
                continue
            else:
                break

        number *= MINUS_FLAG

        if number < INT_MIN:
            return INT_MIN
        elif number > INT_MAX:
            return INT_MAX
        else:
            return number

# @lc code=end

'''
너무 개같은 문제라 다시 풀고 싶지 않은디
'''