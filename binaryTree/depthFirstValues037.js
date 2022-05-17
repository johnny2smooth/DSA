// Write a function, depthFirstValues, that takes in the root of a binary tree.
// The function should return an array containing all values of the tree in depth-first order.

// Parameters
// can we assume that the root will always have children, or is it possible that we recieve an
// empty tree?

// Is it correct that we want to traverse the tree going down the left side first?

// can the tree be non-symmetrical? meaning it is possible that not all nodes on the left side
// will have the same amount of children / leaves as the right side?

// Returns
// if we recieve an empty tree, I am assuming that we want to return an empty array

// we want to return the head node as the first value of the array?

// we may not hit the very bottom of the tree at first, but we will hit the bottom of the left side

// Examples
// THE HEAD OF THE TREE
// class Node() {
// constructor(val){
//   this.val = val;
//   this.left = null;
//   this.right = null
// }
// }
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d')
// const e = new Node(ef')
// const f = new Node('f')

// a.left = b;
// a.right = c;
// b.left = d
// b.right = e;
// c.right = f;

// depthFirst(a) --> [a,b,d,e,c,f]
//       a
//      / \
//     b   c
//    / \   \
//   d   e    f

// if we have null as an input, return an empty array;
// depthFirst(null) --> [];

// if we have a tree that is a leaf
// depthFirst(a) --> [a]
//      a
//     / \
//   null null

// if we have a single node with no children

// Psuedo code
// depthFirst(root) {
// return [] if root is null

// array of values

// we want to create a stack to pop our top node from

// loop thru our tree while stack.length > 0

// within loop keep track of top node in the stack, stack.pop()

// push the node.val to values

// check to see if either left or right side !== null
// if so, we can push the rest left and right to our stack

// return array of values
// }

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValuesRecursion = (root) => {
  if (root === null) return [];
  const leftSide = depthFirstValues(root.left);
  const rightSide = depthFirstValues(root.right);
  return [root.val, ...leftSide, ...rightSide];
};

const depthFirstValues = (root) => {
  if (root === null) return [];

  const values = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.val);

    if (node.right !== null) stack.push(node.right);
    if (node.left !== null) stack.push(node.left);
  }
  return values;
};

module.exports = {
  depthFirstValues,
};
