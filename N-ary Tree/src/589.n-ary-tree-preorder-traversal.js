/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
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
var preorder = function(root) {
  if (root === null) {
    return [];
  }

  const stack = [];

  /**
   * @param {Node} node
   * @return null
   */
  const repeat = (node) => {
    stack.push(node.val);

    if (node.children.length > 0) {
      let length = node.children.length;
      for (var i = 0; i < length; i++) {
        repeat(node.children.shift());
      }
    }
  };
  repeat(root);

  return stack;
};
// @lc code=end

