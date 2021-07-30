import jdk.jfr.internal.SecuritySupport;

/*
 * @lc app=leetcode id=21 lang=java
 *
 * [21] Merge Two Sorted Lists
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
  public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    ListNode head = new ListNode();
    ListNode cursor = head;

    while (l1 != null && l2 != null) {
      if (l1.val < l2.val) {
        cursor.next = l1;
        l1 = l1.next;
      } else {
        cursor.next = l2;
        l2 = l2.next;
      }
      cursor = cursor.next;
    }

    if (l1 == null) {
      while (l2 != null) {
        cursor.next = l2;
        l2 = l2.next;
        cursor = cursor.next;
      }
    } else {
      while (l1 != null) {
        cursor.next = l1;
        l1 = l1.next;
        cursor = cursor.next;
      }
    }

    return head.next;
  }
}
// @lc code=end

