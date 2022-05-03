// Write a function, breadthFirstValues, that takes in the root of a binary tree. The
// function should return an array containing all values of the tree in breadth-first order.

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