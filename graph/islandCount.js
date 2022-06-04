// const islandCount = (grid) => {
//   let visited = new Set();
//   let count = 0;
//   for(let r = 0; r < grid.length; r += 1){
//     for(let c = 0; c < grid[0].length; c += 1){
//       if(explore(grid, r, c, visited) === true) count +=1
//     }
//   }
//   return count
// };

// const explore = (grid, r, c, visited) => {
//   let rowInbounds = 0 <= r && r < grid.length;
//   let colInbounds = 0 <= c && c < grid[0].length;
//   if (rowInbounds === false || colInbounds === false) return false;

//   if(grid[r][c] === 'W') return false;

//   let index = r + ',' + c;
//   if(visited.has(index)) return false;
//   visited.add(index);

//   explore(grid, r + 1, c, visited);
//   explore(grid, r - 1, c, visited);
//   explore(grid, r, c + 1, visited);
//   explore(grid, r, c - 1, visited);

//   return true;
// }
