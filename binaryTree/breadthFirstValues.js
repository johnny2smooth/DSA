// Write a function, breadthFirstValues, that takes in the root of a binary tree. The
// function should return an array containing all values of the tree in breadth-first order.

// PREP
// parameters
// can we assume the root will always be a valid non-null node?
// can we assume the root will always be that of a binary tree?
// does each node instantiation point left and right? even if they point to null?
// by breadth first, i assume that we evaluate both children of each parent before moving on?

// returns
// we want an array of values?
// we are pushing the .val of each node to this array?

// examples
// class Node {
// constructor(val){
// this.val = val;
// this.left = null
// this.right = null
// }
// }

// const a = new Node('a');
// const b = new Node('b')
// const c = new Node('c')
// const d = new Node('d')
// const e = new Node('e')
// const f = new Node('f')

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      a
//     / \
//    b   c
//   / \   \
//  d   e   f

// breadthFirst(a) --> [a,b,c,d,e,f];
// breadthFirst(null) --> [];

// psuedo code
// const breadthFirst = (root) => {
// edge case for null

// instantiate array that we will push values to

// instantiate queue that we can shift our node.val from

// loop thru nodes while queue length > 0

// *inside the loop*

// shift first value from queue;

// push that value to our values array

// if that node is not a leaf, push its child(ren) to the queue

// return values array

// }

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
  if (root === null) return [];

  let results = [];
  let queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    results.push(current.val);
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return results;
};

module.exports = {
  breadthFirstValues,
};
