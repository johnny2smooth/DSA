// Write a function, largestComponent, that takes in the
// adjacency list of an unidirected graph. The function
// should return the size of the largest connected
// component in the graph.

// parameters

// returns

// example

// psuedo code

// const largestComponent = (graph) => {
//   let largest = 0;
//   for (let node in graph) {
//     if (explore(graph, node, new Set(), largest) > largest) {
//       largest = explore(graph, node, new Set(), largest);
//     }
//   }
//   console.log(largest);
//   return largest;
// };

// const explore = (graph, current, visited, largest) => {
//   let componentSize = 0;
//   if(visited.has(String(current))) return false;
//   visited.add(String(current));

//   for(let neighbor of graph[current]){
//     explore(graph, neighbor, visited, largest)
//   }
//   console.log(visited.size)
//   return visited.size > largest ? visited.size : largest;
// }
