// Write a function, connectedComponentsCount, that takes in
// the adjacency list of an undirected graph. The function should return
// the number of connected components within the graph.

// prep
// parameters
// adjacency list ---> a js objected
// undirected graph just means that each node can point in any direciton to another
// will always be non null? empty obj possible?

// returns
// a number yes
// what else do we need to find that number?
// we need a count
// we need a new set of visited nodes
// we need a helper funciton that helps us explore
// helper function returns true or false
// when helper function returns true, we know that neighbors are explored
// therefore add to the count
// each recursive call in the helper function checks to see if node has
// been visited

// examples
// build out a js object
// draw out the connections

// connectedComponentsCount({
//   0: [8, 1, 5],
//   1: [0],
//   5: [0, 8],
//   8: [0, 5],
//   2: [3, 4],
//   3: [2, 4],
//   4: [3, 2]
// }); // -> 2

// psuedo code
// loop thru keys
// initiate helper function
// write out helper function
// make top level visited variable, add visited to hf parameters
// initiate count
// inside helper, loop thru object by current node
// helper, if visited... else add to visited
// return true after each node is fully explored
// when hf returns true, add to our count
// return count

const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();

  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count += 1;
    }
  }

  return count;
};

const explore = (graph, currentNode, visited) => {
  if (visited.has(String(currentNode))) return false;
  visited.add(String(currentNode));

  for (let neighbor of graph[currentNode]) {
    explore(graph, neighbor, visited);
  }

  return true;
};
