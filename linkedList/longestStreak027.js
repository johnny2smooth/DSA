// Write a function, longestStreak, that takes in the head of a linked list as an argument.
// The function should return the length of the longest consecutive streak of the same
// value within the list.

const longestStreak = (head) => {
  let current = head;
  let maxStreak = 0;
  let currentStreak = 0;
  let previousValue = null;

  while (current !== null) {
    if (current.val !== previousValue) {
      previousValue = current.val;
      currentStreak = 1;
    } else {
      currentStreak += 1;
    }
    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }
    current = current.next;
  }
  return maxStreak;
};
