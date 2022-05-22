// Write a function, pathFinder, that takes in the root of a
// binary tree and a target value. The function should return an array
// representing a path to the target value.

// If the target value is not found in the tree, then return null.

// parameters
// can i assume the nodes contain unique values?
// Can i assume that I will always be given a tree !== null?
// take in a target and a root
// Am i looking for numbers or strings? Does it matter?
// is it okay to add to our parameters if solving this recursively would require?

// returns
// if not found, return null, not an empty array
// do we want target to root, or root to target?
// if root === target, do we want to return a single value in an array?

// examples
// create node...
// pathFinder(a,"d")
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
// a-->b-->d
// return [a,b,d]

// pathFinder(a, "a")
// a
// a
// return [a]

// pathFinder(a, "z")
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
// no path
// return null

// psuedo code
// edge case for root === null
// code trying to find the target
// if currentNode.val === target, add value to array;
// create a leftside and rightside path
// add node.val and path to array if the path is not equal to null
// if can't be found, return null

const pathFinder = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinder(root.left, target);
  if (leftPath !== null) return [root.val, ...leftPath];

  const rightPath = pathFinder(root.right, target);
  if (rightPath !== null) return [root.val, ...rightPath];

  return null;
};

// better way
// time complexity goes from O(n^2) to O(n)

// const pathFinder = (root, target) => {
//   const result = pathFinderHelper(root, target);
//   if (result === null) {
//     return null;
//   } else {
//     return result.reverse();
//   }
// };

// const pathFinderHelper = (root, target) => {
//   if (root === null) return null;
//   if (root.val === target) return [ root.val ];

//   const leftPath = pathFinderHelper(root.left, target);
//   if (leftPath !== null) {
//     leftPath.push(root.val);
//     return leftPath;
//   }

//   const rightPath = pathFinderHelper(root.right, target);
//   if (rightPath !== null) {
//     rightPath.push(root.val);
//     return rightPath;
//   }

//   return null;
// };
