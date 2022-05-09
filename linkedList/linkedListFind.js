// class Node {
//   constructor(val){
//     this.val = val;
//     this.next = null;
//   }
// }

// iterative
// const linkedListFind = (head, target) => {
//   let current = head;
//   while (current !== null) {
//     if(current.val === target){
//       return true;
//     } else {
//       current = current.next
//     }
//   }
//   return false
// }

// recursive
// const linkedListFind = (head, target) => {
//   if (head === null) return false;
//   if (head.val === target) return true;
//   return linkedListFind(head.next, target)
// }
