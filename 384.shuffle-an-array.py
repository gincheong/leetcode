#
# @lc app=leetcode id=384 lang=python3
#
# [384] Shuffle an Array
#
from random import shuffle
from typing import List
# @lc code=start
class Solution:

    def __init__(self, nums: List[int]):
        self.nums = nums
        self.shuffled_nums = list(nums)

    def reset(self) -> List[int]:
        """
        Resets the array to its original configuration and return it.
        """
        return self.nums

    def shuffle(self) -> List[int]:
        """
        Returns a random shuffling of the array.
        """

        # 이렇게 풀면 절대 합격못함 ㅋㅋ
        # shuffle하는 과정은 최소한 풀어쓰도록..
        
        shuffle(self.shuffled_nums)
        return self.shuffled_nums

# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()
# @lc code=end
