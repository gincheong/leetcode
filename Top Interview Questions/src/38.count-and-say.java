/*
 * @lc app=leetcode id=38 lang=java
 *
 * [38] Count and Say
 */

// @lc code=start
class Solution {
  public String countAndSay(int n) {
    if (n == 1) {
      return "1";
    }

    String target = "1";
    
    for (int i = 1; i < n; i++) {
      StringBuilder result = new StringBuilder();

      int count = 1;
      char currentNumber = target.charAt(0);
      for (int j = 1; j < target.length(); j++) {
        
        if (currentNumber == target.charAt(j)) {
          count++;
        } else {
          result.append(count);
          result.append(currentNumber);
          count = 1;
          currentNumber = target.charAt(j);
        }
      }

      result.append(count);
      result.append(currentNumber);
      target = result.toString();
    }

    return target;
  }
}
// @lc code=end

