/*
 * @lc app=leetcode id=19 lang=java
 *
 * [19] Remove Nth Node From End of List
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
  public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode newHead = new ListNode(0, head);

    ListNode fast = newHead;
    ListNode slow = newHead;

    for (int i = 0; i < n; i++) {
      fast = fast.next;
    }

    while (fast.next != null) {
      fast = fast.next;
      slow = slow.next;
    }

    slow.next = slow.next.next;

    return newHead.next;
  }
}
// @lc code=end

