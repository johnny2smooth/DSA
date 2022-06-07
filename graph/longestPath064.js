const longestPath = (graph) => {
  let distance = {};

  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }

  for (let node in graph) {
    explorePath(graph, node, distance);
  }

  return Math.max(...Object.values(distance));
};

const explorePath = (graph, node, distance) => {
  if (node in distance) return distance[node];
  let maxDistance = 0;

  for (let neighbor of graph[node]) {
    const attempt = explorePath(graph, neighbor, distance);
    if (attempt > maxDistance) maxDistance = attempt;
  }

  distance[node] = maxDistance + 1;
  return distance[node];
};
