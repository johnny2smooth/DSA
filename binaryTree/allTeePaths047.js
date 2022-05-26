// Write a function, all TreePaths, that takes in the root of
// a binary tree. The function should return a 2-dimensional
// array where each subarray represents a root-to-leaf path
// in the tree.

// The order within an individual path must start at the root
// and end at the lead, but the relative order among paths
// in the outer array does not matter.

// You may assume that the input tree is non-empty

// params
// input tree non-empty?
// will always be a node?
// does the node val have to be any type?
// can we recieve a single level node?

// returns
// an array of arrays of the root to leaf path
// if node is 1 long, we still want an array of arrays returned?
// the order of the paths, left side first for example, is irrelevant
// paths are the be ordered root first, leaf last?

// examples
// construct node structure...
// allTreePaths(a)
//          a
//         / \
//        b   c
//       / \    \
//      d   e    f
//  ---> [[a,b,d],[a,b,e],[a,c,f]];

// allTreePaths(a)
//          a
//         / \
//       null null
//  ---> [[a]]

// psuedo code
// guard for root === null
// recursive approach
// depth first
// check if the current node is a leaf
// if so, return [[node.val]]
// assign left side and right side values
// loop through subarrays to add current value
// push those arrays to a final paths array

const allTreePaths = (root) => {
  if (root === null) return [];
  if (root.left === null && root.right === null) return [[root.val]];
  let paths = [];
  let leftSubPaths = allTreePaths(root.left);
  let rightSubPaths = allTreePaths(root.right);

  for (let subpath of leftSubPaths) {
    paths.push([root.val, ...subpath]);
  }

  for (let subpath of rightSubPaths) {
    paths.push([root.val, ...subpath]);
  }

  return paths;
};

// what is this
