// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// iterative
// const getNodeValue = (head, index) => {
//   let current = head;
//   let count = 0;
//   while (count <= index) {
//     if (current === null) return null;
//     if (count === index) {
//       return current.val;
//     } else {
//       current = current.next;
//       count += 1;
//     }
//   }
//   return null;
// };

const getNodeValue = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  return getNodeValue(head.next, index - 1);
};
