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
