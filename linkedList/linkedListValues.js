const linkedListValues = (head) => {
  if (head === null) return [];
  let values = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
};
