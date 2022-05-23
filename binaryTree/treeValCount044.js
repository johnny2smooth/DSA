// Write a function, treeValueCount, that takes in the root of a binary tree and
// a target value. The function should return the number of times that
// the target occurs in the tree.

// parameters

// returns

// example

// psuedo code

// my recursive solution
// const treeValueCount = (root, target) => {
//   if (root === null) return 0;
//   let sum = 0;

//   let leftSide = treeValueCount(root.left, target);
//   let rightSide = treeValueCount(root.right, target);

//   sum += leftSide + rightSide;

//   if (root.val === target) sum += 1;

//   return sum;
// };

// another recursive solution
// const treeValueCount = (root, target) => {
//   if (root === null) return 0;
//   const match = root.val === target ? 1 : 0;
//   return match + treeValueCount(root.left, target) + treeValueCount(root.right, target);
// };

// an iterative solution
// const treeValueCount = (root, target) => {
//   if (root === null) return 0;

//   let count = 0;
//   const stack = [ root ];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     if (current.val === target) count += 1;

//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//   }

//   return count;
// };
