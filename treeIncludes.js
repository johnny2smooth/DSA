// Write a function, treeIncludes, that takes in the root of a binary tree and a target value.
// The function should return a boolean indicating whether or not the value is contained in the tree.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeIncludesQueue = (root, target) => {
  if (root === null) return false;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === target) return true;

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return false;
};

const treeIncludesRecursion = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return (
    treeIncludesRecursion(root.left, target) ||
    treeIncludesRecursion(root.right, target)
  );
};

module.exports = {
  treeIncludes,
};
