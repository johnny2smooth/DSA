// prep

const levelAverages = (root) => {
  if (root === undefined) return [];
  let levels = [];
  getLevels(root, levels, 0);
  console.log(levels);
  return levels.map(getAvgs);
};

const getAvgs = (array) => {
  let sum = 0;
  for (let number of array) {
    sum += number;
  }
  return sum / array.length;
};

const getLevels = (root, levels, levelNum) => {
  if (root === null) return [];

  if (levels.length === levelNum) {
    levels.push([root.val]);
  } else {
    levels[levelNum].push(root.val);
  }

  getLevels(root.left, levels, levelNum + 1);
  getLevels(root.right, levels, levelNum + 1);
};
