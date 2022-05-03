// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values.
// The function should return the minimum value within the tree.

// You may assume that the input tree is non-empty.

const treeMinValue = (root) => {
  if (root === null) return Infinity;
  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
};

const treeMinValueDepthFirst = (root) => {
  let smallest = Infinity;
  let stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val < smallest) smallest = current.val;
    if (current.left !== null) stack.push(current.left);
    if (current.right !== null) stack.push(current.right);
  }
  return smallest;
};
