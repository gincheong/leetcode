#
# @lc app=leetcode id=387 lang=python3
#
# [387] First Unique Character in a String
#

# @lc code=start
class Solution:
    def firstUniqChar(self, s: str) -> int:
        history = set()

        for i in range(len(s)):
            current = s[i]
            if current not in history:
                if s[i] in s[i+1:]:
                    history.add(s[i])
                else:
                    return i
        return -1
            
# @lc code=end

"""
time: O(n)
space: O(1), 알파벳 소문자만 따지기 때문에 history의 크기가 최대 26임
"""

print(Solution.firstUniqChar(None, "leetcode"))
print(Solution.firstUniqChar(None, "loveleetcode"))
