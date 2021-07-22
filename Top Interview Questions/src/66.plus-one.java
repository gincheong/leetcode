/*
 * @lc app=leetcode id=66 lang=java
 *
 * [66] Plus One
 */

// @lc code=start
class Solution {
  public int[] plusOne(int[] digits) {
    digits[digits.length - 1]++;

    boolean carry = false;
    if (digits[digits.length - 1] == 10) {
      digits[digits.length - 1] = 0;
      carry = true;
    }

    for (int i = digits.length - 2; i >= 0; i--) {
      if (!carry) { break; }

      digits[i]++;
      if (digits[i] == 10) {
        digits[i] = 0;
      } else {
        carry = false;
      }
    }

    if (carry) {
      int[] newDigits = new int[digits.length + 1];
      newDigits[0] = 1;
      System.arraycopy(digits, 0, newDigits, 1, digits.length);
      digits = newDigits;
      newDigits = null;
    }

    return digits;
  }
}
// @lc code=end

