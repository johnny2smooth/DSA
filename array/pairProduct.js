// array, target
// return matching indexes

// store visited numbers in a {}
// I want to store the number as the key and the index as value

// therefore I'll iterate with a basic for loop, so I can easily
// keep track if i

const pairProduct = (numbers, targetProduct) => {
  let visited = {};

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let counterpart = targetProduct / num;
    if (visited[counterpart]) {
      return [visited[counterpart], i];
    }
    visited[num] = i;
  }
};
