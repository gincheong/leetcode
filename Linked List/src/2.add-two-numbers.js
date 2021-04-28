/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
var addTwoNumbers = function(l1, l2) {
  let num1 = '';
  let num2 = '';

  let node1 = l1;
  while (node1 !== null) {
    num1 = node1.val + num1;
    node1 = node1.next;
  }

  let node2 = l2;
  while (node2 !== null) {
    num2 = node2.val + num2;
    node2 = node2.next;
  }

  const sum = BigInt(num1) + BigInt(num2);
  let sumNumbers = sum.toString().split('').reverse();

  const sumHead = new ListNode();
  let sumNode = sumHead;
  sumNumbers.forEach(val => {
    sumNode.next = new ListNode(val);
    sumNode = sumNode.next;
  });

  return sumHead.next;
};
// @lc code=end

