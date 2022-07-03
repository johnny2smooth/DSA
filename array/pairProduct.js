// Mine

const pairProduct = (numbers, targetProduct) => {
  let pair = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      let missingNumber = targetProduct / numbers[i];
      if (missingNumber === numbers[j]) {
        pair.push(i, j);
        return pair;
      }
    }
  }
};

// Hashmap
// const pairProduct = (numbers, targetProduct) => {
//   const previousNums = {};
//   for (let i = 0; i < numbers.length; i += 1) {
//     const num = numbers[i];
//     const complement = targetProduct / num;

//     if (complement in previousNums) return [ previousNums[complement], i ];

//     previousNums[num] = i;
//   }
// };
