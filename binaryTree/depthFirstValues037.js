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
