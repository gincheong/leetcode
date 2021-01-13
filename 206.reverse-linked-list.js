/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// Definition for singly-linked list.
function ListNode(val, next) {
  this.next = (next===undefined ? null : next)
  this.val = (val===undefined ? 0 : val)
}
// @lc code=start
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var newHead = new ListNode();
  while (head !== null) {
    var currentNode = head;
    head = head.next;
    
    var tempNode = newHead.next;
    newHead.next = currentNode;
    newHead.next.next = tempNode;
    
  }

  return newHead.next;
};
// @lc code=end

