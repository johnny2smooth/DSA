// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values.
// The function should return the minimum value within the tree.

// You may assume that the input tree is non-empty.

// params
// every node will always have a number as its val property?
// can the root === null / undefined ?
// will any number in our tree be Infinity or -Infinity?

// returns
// return a number
// should we return Infinity if our tree is empty?
// if we have two equally small values, do we need to make note of that?

// examples
// write out node structure...
// treeMinValue(a)
//        1
//       / \
//      3   5
//     / \   \
//    9   1   -1
// return -1

// some edits

// treeMinValue(null)
//      null
// return Infinity;

// psuedo code
// const treeMinValue = (root) => {
// we want to keep track of our current node.
// a BIG baseline number to compare our current node.val to
// create a stack which we can pop values from
// while loop in regards to stack.length
// get current val
// check current val in regards to our init number / smallest so far
// assign values accordingly
// add next nodes to the stack when the children are not null
// end of while loop
// return the smallest number
// }

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
