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

// recursive
// const getNodeValue = (head, index) => {
//   if (head === null) return null;
//   if (index === 0) return head.val;
//   return getNodeValue(head.next, index - 1);
// };

// his iterative solution
// const getNodeValue = (head, index) => {
//   let count = 0;
//   let current = head;
//   while (current !== null) {
//     if (count === index) return current.val;
//     current = current.next;
//     count += 1;
//   }
//   return null;
// };

const getNodeValue = (head, index) => {
  if (head === null) return null;
  return index <= 0 ? head.val : getNodeValue(head.next, index - 1);
};
