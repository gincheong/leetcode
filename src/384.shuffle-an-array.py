#
# @lc app=leetcode id=384 lang=python3
#
# [384] Shuffle an Array
#
from random import randrange
from typing import List
# @lc code=start
class Solution:
    def __init__(self, nums: List[int]):
        self.nums = nums
        self.shuffled = nums.copy()

    def reset(self) -> List[int]:
        """
        Resets the array to its original configuration and return it.
        """
        return self.nums

    def shuffle(self) -> List[int]:
        """
        Returns a random shuffling of the array.
        """
        for i in range(len(self.shuffled)):
            rand_idx = randrange(i, len(self.shuffled))
            self.shuffled[i], self.shuffled[rand_idx] = self.shuffled[rand_idx], self.shuffled[i]

        return self.shuffled

    # shuffle을 초기화시에 permutations으로 만들어 두는 방법이 있던데
    # 메모리 대신 시간이 단축되는 효과를 볼 수 있음

# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()
# @lc code=end
