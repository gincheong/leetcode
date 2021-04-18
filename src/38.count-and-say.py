#
# @lc app=leetcode id=38 lang=python3
#
# [38] Count and Say
#

# @lc code=start
class Solution:
    def countAndSay(self, n: int) -> str:
        
        return self.say(n, "1")

    def say(self, n: int, string: str):
        if n == 1:
            return string

        count = 1
        current = string[0]
        result = ""
        for each in string[1:]:
            if current == each:
                count += 1
            else:
                result += (str(count) + str(current))
                count = 1
                current = each
        result += (str(count) + str(current))

        return self.say(n - 1, result)

# @lc code=end

s = Solution()
print(s.countAndSay(4))