const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[j] === 5) {
      j -= 1;
    } else if (nums[i] === 5) {
      // destructure an array's values by putting them into another array
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i += 1;
    } else {
      i += 1;
    }
  }
  return nums;
};
