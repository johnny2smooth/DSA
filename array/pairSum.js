const pairSum = (array, targetSum) => {
  const visited = {};

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    let counterpart = targetSum - num;
    if (counterpart in visited) {
      return [visited[counterpart], i];
    }
    visited[num] = i;
  }
};
