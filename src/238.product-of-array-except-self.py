#
# @lc app=leetcode id=238 lang=python3
#
# [238] Product of Array Except Self
#

# @lc code=start
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        length = len(nums)
        left, right, answer = [0]*length, [0]*length, [0]*length

        left[0] = 1
        right[-1] = 1

        for i in range(1, length):
            left[i] = left[i - 1] * nums[i - 1]

        for i in reversed(range(length - 1)):
            right[i] = right[i + 1] * nums[i + 1]

        for i in range(length):
            answer[i] = left[i] * right[i]

        return answer
        
    
# @lc code=end