// Write a function, treeSum, that takes in the root of a binary tree that contains number values.
// The function should return the total sum of all values in the tree.

const treeSum = (root) => {
  if (root === null) return 0;
  let total = 0;
  let queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();
    total = total + current.val;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return total;
};

const treeSumRecursion = (root) => {
  if (root === null) return 0;
  let leftSide = treeSumRecursion(root.left);
  let rightSide = treeSumRecursion(root.right);
  return root.val + leftSide + rightSide;
};
