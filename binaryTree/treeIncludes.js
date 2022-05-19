// Write a function, treeIncludes, that takes in the root of a binary tree and a target value.
// The function should return a boolean indicating whether or not the value is contained in the tree.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// parameters
// root node + target value
// root node can be null?
// target value will always be a number?
// root.val will always be a number (unless null)
// guarenteed a binary tree?

// returns
// boolean
// either true or false

// example
// build a node...
// add its path...
// treeIncludes(a, 22)
// true
// treeIncludes(a, 412355161)
// false
// treeIncludes(null, 22)
// false

// psuedo code
// set up function
// edge case for root === null;
// set up our stack array
// loop while stack > 0
// pop current node off stack
// check currentnode.value
// if that value is === target return true
// push children to the stack if they're !== null
// return false if all else fail

// recursive psuedo
// check for edge case and final leaves case
// check to see if current node.val === target
// if not return a recursive call to left or right side. if either side evals to true,
// we will return true

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
