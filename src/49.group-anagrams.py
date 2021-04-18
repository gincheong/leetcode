#
# @lc app=leetcode id=49 lang=python3
#
# [49] Group Anagrams
#
from typing import List
# @lc code=start
from collections import defaultdict
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dic = defaultdict(list)

        for each in strs:
            key = self.sortCharacter(each)
            dic[key].append(each)
        
        return dic.values()

    def sortCharacter(self, word):
        return "".join(sorted(word))


# @lc code=end

# n: number of words
# k: maximum length of word in strs

# Time : O(N x KlogK), sorting -> logN
# Space : O(N x K)