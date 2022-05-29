// prep

const leafList = (root) => {
  if (root === null) return [];
  let list = [];
  getLeaf(root, list);
  return list;
};

const getLeaf = (root, list) => {
  if (root === null) return;
  if (root.left === null && root.right === null) {
    list.push(root.val);
  }
  getLeaf(root.left, list);
  getLeaf(root.right, list);
};
