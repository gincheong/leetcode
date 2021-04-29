/*
 * @lc app=leetcode id=590 lang=javascript
 *
 * [590] N-ary Tree Postorder Traversal
 */

// Definition for a Node.
class Node {
  /**
   * @param {number} val
   * @param {Node[]} children
   */
  constructor(val, children) {
    this.val = val;
    this.children = children;
  }
};


// @lc code=start
/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  if (root === null) {
    return [];
  }
  const stack = [];

  /**
   * @param {Node} node
   * @return null
   */
  const repeat = (node) => {

    let length = node.children.length;
    if (length > 0) {
      for (var i = 0; i < length; i++) {
        repeat(node.children.shift());
      }
      stack.push(node.val);
    } else {
      stack.push(node.val);
    }

  };

  repeat(root);

  return stack;
};
// @lc code=end


