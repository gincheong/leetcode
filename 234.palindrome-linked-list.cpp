/*
 * @lc app=leetcode id=234 lang=cpp
 *
 * [234] Palindrome Linked List
 */
#include <iostream>
using namespace std;
// Definition for singly-linked list.
struct ListNode {
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};
// @lc code=start
class Solution {
 public:
  bool isPalindrome(ListNode *head) {
    ListNode *fast = head;
    ListNode *slow = head;
    ListNode *reverse = nullptr;

    while (fast != nullptr && fast->next != nullptr) {
      ListNode *temp = reverse;
      ListNode *temp2 = slow;

      slow = slow->next;
      fast = fast->next->next;

      reverse = temp2;
      reverse->next = temp;
    }

    if (fast != nullptr) {
      slow = slow->next;
    }

    while (slow != nullptr) {
      if (slow->val != reverse->val) {
        return false;
      }
      slow = slow->next;
      reverse = reverse->next;
    }

    return true;
  }
};
// @lc code=end
