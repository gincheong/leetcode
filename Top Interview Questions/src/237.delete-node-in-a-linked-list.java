/*
 * @lc app=leetcode id=237 lang=java
 *
 * [237] Delete Node in a Linked List
 */

// Definition for singly-linked list.
class ListNode {
  int val;
  ListNode next;
  ListNode(int x) { val = x; }
}

// @lc code=start
class Solution {
  public void deleteNode(ListNode node) {
    ListNode nextNode = node.next;

    node.val = nextNode.val;
    node.next = nextNode.next;
  }
}
// @lc code=end

