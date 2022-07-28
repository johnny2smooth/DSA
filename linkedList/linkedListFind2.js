const linkedListFind = (head, target) => {
  if (head === null) return false;
  return head.val === target ? true : linkedListFind(head.next, target);
};
