// Write a function, treeLevels, that takes in the root of a binary tree.
// The function should return a 2-Dimensional array where each
// subarray represents a level of the tree.

// Parameters
// will the node ever be === null?
// can I assume all params will always be a binary tree?
// each node --> node.val, node.left, node.right

// Returns
// when root === null, we can return a blank array
// for each level, we want to return another sub array
// for level 0, root, will always be at max 1 long
// level 1 at most 2 long...

// Examples
// construct node
// ...
// treeLevels(a)
//      a         level 0: [a]
//    /   \
//   b     c      level 1: [b,c]
//  / \     \
// d   e     f    level 2: [d,e,f]
// return --> [[a], [b,c], [d,e,f]]

// when root === null
// treeLevels(null)
//      null         level 0:
// return --> []

// Psuedo Code
// edge case
// there are a few values we are going to want to keep track of
// create a stack array from root node
// level is at 0 when we are at root
// loop
// pop current node from the stack
// check if level array exists
// push value to array of according level
// push children and next level value
// return array of arrays

// const treeLevels = (root) => {
//   if (root === null) return [];
//   let levels = [];
//   let stack = [{ current: root, levelNum: 0 }];
//   while (stack.length > 0) {
//     let { current, levelNum } = stack.pop();
//     if (levels[levelNum] === undefined) {
//       levels.push([current.val]);
//     } else {
//       levels[levelNum].push(current.val);
//     }

//     if (current.right !== null)
//       stack.push({ current: current.right, levelNum: levelNum + 1 });
//     if (current.left !== null)
//       stack.push({ current: current.left, levelNum: levelNum + 1 });
//   }
//   return levels;
// };

// recursive way
// const treeLeveler = (root, levels, levelNum) => {
//   if(root === null) return;
//   if(levels[levelNum] === undefined){
//     levels[levelNum] = [root.val];
//   } else {
//     levels[levelNum].push(root.val)
//   }
//   treeLeveler(root.left, levels, levelNum + 1);
//   treeLeveler(root.right, levels, levelNum + 1);
// }
