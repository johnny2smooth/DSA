// my first solution

// const addLists = (head1, head2) => {
//   let current1 = head1;
//   let current2 = head2;
//   let dummyHead = new Node(null);
//   let tail = dummyHead;
//   let carry = 0;
//   while (current1 !== null && current2 !== null) {
//     let total;

//     if (carry === 1) {
//       total = current1.val + current2.val + carry;
//       carry = 0;
//     } else {
//       total = current1.val + current2.val;
//     }

//     if (total >= 10) {
//       total -= 10;
//       carry = 1;
//     }

//     tail.next = new Node(total);
//     tail = tail.next;

//     current1 = current1.next;
//     current2 = current2.next;
//   }

//   while (current1 === null && current2 !== null) {
//     let total;
//     if (carry === 1) {
//       total = current2.val + carry;
//       carry = 0;
//     } else {
//       total = current2.val;
//     }
//     if (total >= 10) {
//       total -= 10;
//       carry = 1;
//     }
//     tail.next = new Node(total);
//     tail = tail.next;
//     current2 = current2.next;
//   }
//   while (current2 === null && current1 !== null) {
//     let total;
//     if (carry === 1) {
//       total = current1.val + carry;
//       carry = 0;
//     } else {
//       total = current1.val;
//     }
//     if (total >= 10) {
//       total -= 10;
//       carry = 1;
//     }
//     tail.next = new Node(total);
//     tail = tail.next;
//     current1 = current1.next;
//   }
//   if (current1 === null && current2 === null && carry === 1) {
//     tail.next = new Node(carry);
//     tail = tail.next;
//   }
//   return dummyHead.next;
// };

// recursion off the dome (answer recalled)
// const addLists = (head1, head2, carry = 0) => {
//   if(head1 === null && head2 === null && carry === 0) return null;
//   let value1 = head1 === null ? 0 : head1.val;
//   let value2 = head2 === null ? 0 : head2.val;
//   const sum = value1 + value2 + carry;
//   carry = sum > 9 ? 1 : 0;
//   const digit = sum  % 10;
//   let next1 = head1 === null ? null : head1.next;
//   let next2 = head2 === null ? null : head2.next;

//   let returnNode = new Node(digit);
//   returnNode.next = addLists(next1, next2, carry);
//   return returnNode
// };

// iteration off the dome! (answer recalled)
// const addLists = (head1, head2, carry = 0) => {
//   let dummyNode = new Node(null);
//   let tail = dummyNode;
//   let current1 = head1;
//   let current2 = head2;

//   while(current1 !== null || current2 !== null || carry !== 0) {
//     let value1 = current1 === null ? 0 : current1.val;
//     let value2 = current2 === null ? 0 : current2.val;
//     const sum = value1 + value2 + carry;
//     carry = sum > 9 ? 1 : 0;
//     const digit = sum  % 10;

//     tail.next = new Node(digit);
//     tail = tail.next

//     let next1 = current1 === null ? null : current1.next;
//     let next2 = current2 === null ? null : current2.next;

//     current1 = next1;
//     current2 = next2;
//   }
//   return dummyNode.next;
// };
