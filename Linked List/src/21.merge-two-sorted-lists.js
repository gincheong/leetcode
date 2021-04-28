/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  
  const newHead = new ListNode();

  let node1 = l1;
  let node2 = l2;
  let newNode = newHead;
  while (node1 !== null && node2 !== null) {
    if (node1.val < node2.val) {
      newNode.next = node1; 
      node1 = node1.next;
    } else {
      newNode.next = node2;
      node2 = node2.next;
    }
    
    newNode = newNode.next;
  }

  while (node1 !== null) {
    newNode.next = node1;
    newNode = newNode.next;
    node1 = node1.next;
  }

  while (node2 !== null) {
    newNode.next = node2;
    newNode = newNode.next;
    node2 = node2.next;
  }

  return newHead.next;
};
// @lc code=end

