#
# @lc app=leetcode id=155 lang=python3
#
# [155] Min Stack
#

# @lc code=start
class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []
        self.minValue = None

    def push(self, x: int) -> None:
        if self.minValue == None or self.minValue >= x:
            self.stack.append(self.minValue)
            self.minValue = x
        self.stack.append(x)
        # O(2)

    def pop(self) -> None:
        if self.stack.pop() == self.minValue:
            self.minValue = self.stack.pop()
        # O(2)

    def top(self) -> int:
        return self.stack[-1]
        # O(1)

    def getMin(self) -> int:
        return self.minValue
        # O(1)


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
# @lc code=end

