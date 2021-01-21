/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

// @lc code=start
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var head = new ListNode();
  var node = head;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }

    node = node.next;
  }

  if (l1 !== null) {
    node.next = l1;
  } else if (l2 !== null) {
    node.next = l2;
  }

  return head.next;
};
// @lc code=end

