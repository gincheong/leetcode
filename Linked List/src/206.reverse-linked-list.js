/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */


// Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// @lc code=start
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let newHead = new ListNode(0)
  
  let current = head;
  let temp;
  while (current !== null) {
    temp = newHead.next;
    newHead.next = new ListNode(current.val, temp);
    current = current.next;
  }

  return newHead.next;
};
// @lc code=end


