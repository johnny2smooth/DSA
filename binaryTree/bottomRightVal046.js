// Write a function, bottomRightValue, that takes in the root
// of a binary tree. The function should return the right-most value in
// the bottom-most level of the tree.
// You may assume that the input tree is non-empty

// parameters
// the root node will never be null?
// the node's structure has 3 values: val, left, right

// returns
// return the bottom most value, furthest to the right
// the type does not matter

// examples
// construct node...
// bottomRightValue(a)
//          a
//         / \
//        b   c
//       / \    \
//      d   e    f
// returns "f"

// bottomRightValue(a)
//          a
//         / \
//        b   c
//       / \    \
//      d   e    f
//     /
//    g
// returns "g": even though it is all the way to the right, it is the
// only value at the bottom-most level

// psuedo code
// i would usually guard for root === null
// set up a queue that looks at our root node
// set up an array to add our values to
// while loop to add to queue
// instantiate the current node
// push that value to values array
// add left side to queue, then right side to queue when !== null
// return final value in the values array

const bottomRightValue = (root) => {
  // guard for root === null
  let queue = [root];
  let values = [];
  while (queue.length > 0) {
    let current = queue.shift();
    values.push(current.val);
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return values[values.length - 1];
};

// or

const bottomRightValue2 = (root) => {
  // guard for root === null
  let queue = [root];
  let current = null;
  while (queue.length > 0) {
    current = queue.shift();
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return current.val;
};
