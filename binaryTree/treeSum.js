// Write a function, treeSum, that takes in the root of a binary tree that contains number values.
// The function should return the total sum of all values in the tree.

// Parameters
// Will there always be a root node that is !== to null?
// all data passed into the function will always be a binary tree?
// each node's value will be a number type?

// Returns
// return a single number
// if our tree is empty, return 0?
// can be negative number?

// example
// create a node class
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// treeSum(a)
// 3 + 11 + 4 + 4 + -2 + 1 = 21?
// treeSum(null)
// 0

// psuedo code
// const treeSum = (root) => {
// return 0 if root is null
// init total count = 0
// init a stack array
// loop through the stack when its length > 0
// inside loop
// what current node are we looking at?
// what is the node's value?
// add the value to our total
// add the children to our stack
// after loop
// return number
// }

// recursive psuedo
// const func = (root) => {
// cover edge case if root is null;
// loop thru left
// loop thru right
// add root.val, leftSide, rightSide
// }

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
