/*
 * @lc app=leetcode id=7 lang=java
 *
 * [7] Reverse Integer
 */

// @lc code=start
class Solution {
  public int reverse(int x) {
    int reversed = 0;

    while (x != 0) {
      // 계산하기 전에, 최댓값을 넘길 잠재력이 있는지 .. 먼저 확인함
      if (reversed < Integer.MIN_VALUE / 10 || reversed > Integer.MAX_VALUE / 10) {
        return 0;
      }
      reversed = (reversed * 10) + (x % 10);
      x /= 10;
    }

    return reversed;
  }

  public static void main(String[] args) {
    Solution s = new Solution();
    System.out.println(s.reverse(123));
    System.out.println(s.reverse(-123));
    System.out.println(s.reverse(120));

  }
}
// @lc code=end

