// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const createLinkedList = (values) => {
//   let dummyHead = new Node(null);
//   let tail = dummyHead;
//   for (let val of values) {
//     tail.next = new Node(val);
//     tail = tail.next;
//   }
//   return dummyHead.next;
// };

// createLinkedList(['h', 'e', 'y']);

// const createLinkedList = (values, i = 0) => {
//   if(i === values.length) return null;
//   let head = new Node(values[i]);
//   head.next = createLinkedList(values, i + 1);
//   return head
// };
