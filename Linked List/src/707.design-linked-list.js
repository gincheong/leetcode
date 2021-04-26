/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

// @lc code=start
/**
 * @param {number} val
 * @param {Node} next
 */
class Node {
  constructor(val = undefined, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Initialize your data structure here.
 */
class MyLinkedList {
  constructor() {
    this.head = new Node();
  }
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let current = this.head;
  while (current.next !== null && index-- > 0) {
    current = current.next;
  }
  
  if (index > 0) {
    // index가 연결리스트의 길이를 넘어선 경우
    return null;
  }

  return current.next?.val ?? -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const temp = this.head.next;
  this.head.next = new Node(val, temp);
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let current = this.head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = new Node(val);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  let current = this.head;
  while (current.next !== null && index-- > 0) {
    current = current.next;
  }

  if (index > 0) {
    // index가 연결리스트의 길이를 넘어선 경우
    return null;
  }

  const tempNext = current.next;
  current.next = new Node(val, tempNext);
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let current = this.head;
  while (current.next !== null && index-- > 0) {
    current = current.next;
  }

  if (index > 0) {
    // index가 연결리스트의 길이를 넘어선 경우
    return null;
  }

  current.next = current.next?.next ?? null;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

