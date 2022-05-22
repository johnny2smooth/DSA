// Write a function, maxPathSum, that takes in the root of a binary tree that contains number values.
// The function should return the maximum sum of any root to leaf path within the tree.

// You may assume that the input tree is non-empty.

// parameters
// every node will contain a number val, unless null
// non empty tree?

// returns
// the sum of values from root to tree
// a single number
// return 0 if null

// examples
// write out node...
// maxPathSum(a);
//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// 4 + 11 + 3

// psuedo code
// we probably want to reach the leaf first
// compare the leaves to eachother and pass the value up
// max between left side vs. right side
// add max value (comparison left v. right) to root.val
// return this sum so that it is passed up the tree again

const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};
