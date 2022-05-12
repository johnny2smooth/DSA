const insertNode = (head, value, index) => {
  if (index === 0) {
    const newNode = new Node(value);
    newNode.next = head;
    return newNode;
  }
  let current = head;
  let count = 1;
  while (current !== null) {
    if (count === index) {
      const newNode = new Node(value);
      newNode.next = current.next;
      current.next = newNode;
    }
    count += 1;
    current = current.next;
  }
  return head;
};
