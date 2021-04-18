#
# @lc app=leetcode id=242 lang=python3
#
# [242] Valid Anagram
#

# @lc code=start
from collections import defaultdict
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        # if sorted(list(s)) == sorted(list(t)):
        #     return True
        # return False
        # time: O(nlogn), sorted
        # space: O(1)
        # sort하는 과정에서 생기는 공간을 따질 수도 있는데(자바의 경우에 그럴 수 있음)
        # 이런 건 사용 언어에 따라 다르게 생기는 문제이기 때문에, 실질적으로 complexity 계산에 포함하지 않는다 함

        hashMap = defaultdict(int)

        for each in s:
            hashMap[each] += 1
        for each in t:
            hashMap[each] -= 1
        
        for each in hashMap.values():
            if each != 0:
                return False
        return True

# @lc code=end

"""
time: O(n)
space: O(1), 알파벳은 최대 26개
Follow Up - 유니코드 문자를 전부 다 쓰면 100만 개가 넘는데, 이 또한 constant한 값이므로 O(1)임
"""