// Write a function, hasPath, that takes in an object representing the
// adjacency list of a directed acyclic graph and two nodes
// (src, dst). The function should return a boolean indicating
// whether or not there exists a node directed path between
// the source and destination nodes

// prep

// parameters
// takes in an object
// graph[key]
// src is a node within the graph
// dst is possibly a node too
// src will always exist in the graph?
// non cyclic
// graph will be non empty?

// returns
// bools

// examples
// create a graph obj
// ...
// const graph = {
//   f: ['g', 'i'],
//   g: ['h'],
//   h: [],
//   i: ['g', 'k'],
//   j: ['i'],
//   k: []
// };

// draw the connections

// psuedo code
// base case: if src === dst return true
// make a stack
// loop thru a stack
// look at our current node
// use current to look at its neighbors and loop through their values
// did we find it?
// otherwise, we need to look at neighbor's neighbors
// if all fails return false

// recursion
// const hasPath = (graph, src, dst) => {
//   if(src === dst) return true;

//   for(let neighbor of graph[src]){
//     if(hasPath(graph, neighbor, dst) === true) {
//       return true;
//     }
//   }

//   return false
// };

// iterative queue
// const hasPath = (graph, src, dst) => {
//   if(src === dst) return true;
//   const queue = [src]
//   while(queue.length > 0){
//     let current = queue.shift();
//     for(let neighbor of graph[current]) {
//       if(neighbor === dst) return true;
//       queue.push(neighbor)
//     }
//   }
//   return false
// };
