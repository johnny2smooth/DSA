// Write a function, treeValueCount, that takes in the root of a binary tree and
// a target value. The function should return the number of times that
// the target occurs in the tree.

// parameters

// returns

// example

// psuedo code

// recursive solution

// const treeValueCount = (root, target) => {
//   if (root === null) return 0;
//   let sum = 0;

//   let leftSide = treeValueCount(root.left, target);
//   let rightSide = treeValueCount(root.right, target);

//   sum += leftSide + rightSide;

//   if (root.val === target) sum += 1;

//   return sum;
// };
