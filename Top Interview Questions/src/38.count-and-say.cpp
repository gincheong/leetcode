/*
 * @lc app=leetcode id=38 lang=cpp
 *
 * [38] Count and Say
 */
#include <string>
using namespace std;
// @lc code=start
class Solution {
 public:
  string countAndSay(int n) {
    string digits = "1";

    for (int i = 0; i < n - 1; i++) {
      digits = read_and_write(digits);
    }

    return digits;
  }

  string read_and_write(string digits) {
    string result = "";

    int count = 1;
    char number = digits.front();

    for (int i = 1; i < digits.size(); i++) {
      if (number == digits[i]) {
        count++;
      } else {
        result += (to_string(count) + number);
        count = 1;
        number = digits[i];
      }
    }
    result += (to_string(count) + number);

    return result;
  }
};
// @lc code=end
