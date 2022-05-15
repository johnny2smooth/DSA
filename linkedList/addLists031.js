// my first solution

const addLists = (head1, head2) => {
  let current1 = head1;
  let current2 = head2;
  let dummyHead = new Node(null);
  let tail = dummyHead;
  let carry = 0;
  while (current1 !== null && current2 !== null) {
    let total;

    if (carry === 1) {
      total = current1.val + current2.val + carry;
      carry = 0;
    } else {
      total = current1.val + current2.val;
    }

    if (total >= 10) {
      total -= 10;
      carry = 1;
    }

    tail.next = new Node(total);
    tail = tail.next;

    current1 = current1.next;
    current2 = current2.next;
  }

  while (current1 === null && current2 !== null) {
    let total;
    if (carry === 1) {
      total = current2.val + carry;
      carry = 0;
    } else {
      total = current2.val;
    }
    if (total >= 10) {
      total -= 10;
      carry = 1;
    }
    tail.next = new Node(total);
    tail = tail.next;
    current2 = current2.next;
  }
  while (current2 === null && current1 !== null) {
    let total;
    if (carry === 1) {
      total = current1.val + carry;
      carry = 0;
    } else {
      total = current1.val;
    }
    if (total >= 10) {
      total -= 10;
      carry = 1;
    }
    tail.next = new Node(total);
    tail = tail.next;
    current1 = current1.next;
  }
  if (current1 === null && current2 === null && carry === 1) {
    tail.next = new Node(carry);
    tail = tail.next;
  }
  return dummyHead.next;
};
