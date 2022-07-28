// iterative
// const reverseList = (head) => {
//   let prev = null;
//   let current = head;
//   while (current !== null) {
//     let next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   return prev
// };

//  n       a     ->   b   ->  c   -> d -> e -> f
//  prev   curr       next

// recursion
// const reverseList = (head, prev = null) => {
//   if (head === null) return prev;
//   let next = head.next;
//   head.next = prev;
//   prev = head;
//   head = next;
//   return reverseList(head, prev)
// };

// his solution
// const reverseList = (head, prev = null) => {
//   if (head === null) return prev;
//   const next = head.next;
//   head.next = prev;
//   return reverseList(next, head);
// };

const reverseList = (head, prev = null) => {
  let current = head;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
