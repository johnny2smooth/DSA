// prep

const minimumIsland = (grid) => {
  const visited = new Set();

  let minSize = Infinity;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      const size = exploreSize(r, c, grid, visited);
      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
  }

  return minSize;
};

const exploreSize = (r, c, graph, visited) => {
  let rowInbounds = 0 <= r && r < graph.length;
  let colInbounds = 0 <= c && c < graph[0].length;
  if (!rowInbounds || !colInbounds) return 0;

  if (graph[r][c] === 'W') return 0;

  let pos = r + ',' + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let count = 1;
  count += exploreSize(r + 1, c, graph, visited);
  count += exploreSize(r - 1, c, graph, visited);
  count += exploreSize(r, c + 1, graph, visited);
  count += exploreSize(r, c - 1, graph, visited);
  return count;
};
