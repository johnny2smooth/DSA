// takes in a grid, starting row, starting column,
// X's are walls, O's open space, C carrot
// return the shortest path from starting position to
// carrot

// parameters
// starting points...
// can we get an undefined value as an arg?
// will our grid always be an array of arrays?
// Can we assume that there will always be a C?

// returns
// a number
// increment distance on a path towards C
// return that path, but check to see if its closest
// return the closest path
// if cant find, return -1
// default value ^^

// examples
// create a grid. array of arrays
// draw the grid
// ...
// show what it returns
// another example

// psuedo code
// we are going to instantiate a few values to begin with
// shortest distance = -1 default. return too
// visited Set
// helper function to explore the grid
// for loops to get row # col # too

// helper f
// check to see if value is X or C
// steps counter . return that
// recursive call x 4 for each direction
// increment steps for each call if matches params
// check visited
// check inbounds

// maybe a few more things to iron out after we start

const closestCarrot = (grid, startRow, startCol) => {
  const visited = new Set([startRow + ',' + startCol]);
  const queue = [[startRow, startCol, 0]];

  while (queue.length > 0) {
    let [row, col, distance] = queue.shift();
    if (grid[row][col] === 'C') return distance;

    let deltas = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let delta of deltas) {
      let [rowDelta, colDelta] = delta;

      let rowNeighbor = row + rowDelta;
      let colNeighbor = col + colDelta;

      let posNeighbor = rowNeighbor + ',' + colNeighbor;

      let rowInbounds = 0 <= rowNeighbor && rowNeighbor < grid.length;
      let colInbounds = 0 <= colNeighbor && colNeighbor < grid[0].length;

      if (
        rowInbounds &&
        colInbounds &&
        grid[rowNeighbor][colNeighbor] !== 'X' &&
        !visited.has(posNeighbor)
      ) {
        queue.push([rowNeighbor, colNeighbor, distance + 1]);
        visited.add(posNeighbor);
      }
    }
  }

  return -1;
};
