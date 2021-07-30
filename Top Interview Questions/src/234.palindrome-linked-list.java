/*
 * @lc app=leetcode id=234 lang=java
 *
 * [234] Palindrome Linked List
 */

// Definition for singly-linked list.
class ListNode {
  int val;
  ListNode next;
  ListNode() {}
  ListNode(int val) { this.val = val; }
  ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}
// @lc code=start
class Solution {
  public boolean isPalindrome(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;

    while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    if (fast.next != null) {
      slow = slow.next;
      fast = fast.next;
    }

    ListNode newHead = new ListNode();
    ListNode cursor = newHead.next;

    while (slow != null) {
      cursor = new ListNode(slow.val, cursor);
      slow = slow.next;
    }

    while (cursor != null) {
      if (cursor.val != head.val) {
        return false;
      }

      head = head.next;
      cursor = cursor.next;
    }

    return true;
  }
}
// @lc code=end

