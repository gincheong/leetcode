/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  var slow = head;
  var fast = head;
  var reverseNode = null

  while (fast !== null && fast.next !== null) {
    var temp = reverseNode;
    reverseNode = new ListNode(slow.val, temp);
      
    fast = fast.next.next;
    slow = slow.next;
  }

  if (fast !== null) {
    slow = slow.next;
  }
  
  while (slow !== null) {
    if (slow.val !== reverseNode.val) {
      return false;
    }

    slow = slow.next;
    reverseNode = reverseNode.next;
  }

  return true;
};
// @lc code=end

