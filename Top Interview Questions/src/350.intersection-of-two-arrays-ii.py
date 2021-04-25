#
# @lc app=leetcode id=350 lang=python3
#
# [350] Intersection of Two Arrays II
#
from typing import List
# @lc code=start
from collections import defaultdict
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        hashMap = defaultdict(int)
        
        answer = []
        for each in nums1:
            hashMap[each] += 1
        
        for each in nums2:
            if hashMap[each] > 0:
                hashMap[each] -= 1
                answer.append(each)
        return answer
        
# @lc code=end

for list1, list2 in [ [[4,9,5], [9,4,9,8,4]], [[1,2,2,1], [2,2]] ]:
    print(Solution.intersect(None, list1, list2))
