// Write a function, isUnivalueList, that takes in the head of a linked list as an argument.
// The function should return a boolean indicating whether or not the linked list
// contains exactly one unique value.

// linked lists
// const isUnivalueList = (head) => {
//   let unique = head.val;
//   let current = head;
//   while (current !== null) {
//     if (current.val !== head.val) {
//       return false;
//     }
//     current = current.next;
//   }
//   return true;
// };

// recursive
// const isUnivalueList = (head, unique = head.val) => {
//   if(head === null) return true;
//   if(head.val !== unique) return false;
//   return isUnivalueList(head.next, unique)
// };
