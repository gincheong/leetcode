#
# @lc app=leetcode id=15 lang=python3
#
# [15] 3Sum
#
from typing import List
# @lc code=start
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        answer = []
        nums.sort()
        
        # X + Y = -Z
        for i in range(len(nums)):
            if i > 0 and nums[i-1] == nums[i]:
                # 이전에 숫자와 같은 경우 제외 (중복 답)
                continue
            Z = -nums[i] # target Value
            
            a = i + 1 # 왼쪽부터 차례대로 다 하니까, i값 기준으로 오른쪽만 하면 됨
            b = len(nums) - 1

            while a < b:
                X = nums[a]
                Y = nums[b]
            
                if X + Y == Z:
                    answer.append([X, Y, -Z])
                    while a < b and nums[a] == nums[a+1]:
                        a += 1
                    while a < b and nums[b] == nums[b-1]:
                        b -= 1
                    a += 1
                    b -= 1
                    # a, b 각 숫자를 전과 동일하지 않게 함
                elif X + Y < Z:
                    a += 1
                elif X + Y > Z:
                    b -= 1
        
        return answer

# @lc code=end

print(Solution.threeSum(None, [-1,0,1,2,-1,-4]))

