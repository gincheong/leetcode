#
# @lc app=leetcode id=189 lang=python3
#
# [189] Rotate Array
#

from typing import List

# @lc code=start
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        k %= len(nums) # 불필요 반복 최소화

        start = 0
        count = 0 # 이동 횟수
        
        while count < len(nums):
            # 모두 변환했으면 끝
            currentIdx = start
            prevVal = nums[currentIdx]
            while True:
                currentIdx = (currentIdx + k) % len(nums)
                nums[currentIdx], prevVal = prevVal, nums[currentIdx]
                # 값을 하나씩 이동시키는 부분
                count += 1

                if currentIdx == start:
                    # 한 바퀴 돌아서 시작점으로 돌아온 경우
                    break
            start += 1

        '''
        k %= len(nums)
        if len(nums) > 1 and k > 0:
            for idx, val in enumerate(nums[-k:] + nums[:len(nums)-k]):
                # 이렇게 풀면 space complexity가 O(n)임
                nums[idx] = val
        '''

# @lc code=end

Solution.rotate(None, [1,2,3,4,5,6,7], 2)

'''
Accepted
35/35 cases passed (64 ms)
Your runtime beats 37 % of python3 submissions
Your memory usage beats 76.64 % of python3 submissions (15.3 MB)
time: O(n)
space: O(n)
'''