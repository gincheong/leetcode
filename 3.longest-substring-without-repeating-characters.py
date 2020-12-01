#
# @lc app=leetcode id=3 lang=python3
#
# [3] Longest Substring Without Repeating Characters
#

# @lc code=start
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:

        # answer = 0
        # charIdx = dict()

        # left = 0
        # for right in range(len(s)):
        #     if s[right] in charIdx:
        #         # 중복 알파벳이 나오면
        #         left = max(charIdx[s[right]] + 1, left)

        #     answer = max(answer, right - left + 1)
        #     charIdx[s[right]] = right
        # return answer


        answer = 0

        a, b = 0, 1
        while a < b and b < len(s):
            if s[b] in s[a:b]:
                # 다음 알파벳이 현재 substring에 포함되어 있으면
                answer = max(answer, len(s[a:b]))
                # 지금 substring의 길이를 answer과 비교하여 저장
                # 그리고 새 substring을 저장해야 함
                a = a + s[a:b].index(s[b]) + 1 
                # 중복되는 알파벳 위치를 찾아서, 그 뒤부터 인덱싱함
            b += 1
        answer = max(answer, len(s[a:b]))

        return answer

# @lc code=end

# print(Solution.lengthOfLongestSubstring(None, "abcabcbb"))
# print(Solution.lengthOfLongestSubstring(None, "pwwkew"))
# print(Solution.lengthOfLongestSubstring(None, "bbbb"))
print(Solution.lengthOfLongestSubstring(None, "abba"))
# print(Solution.lengthOfLongestSubstring(None, " "))
# print(Solution.lengthOfLongestSubstring(None, "dvdf"))


