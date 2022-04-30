// A phrase is a palindrome if, after converting all uppercase letters into lowercase
// letters and removing all non-alphanumeric characters, it reads the same forward
// and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function (s) {
  let filtered = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  let bool = true;
  console.log(filtered);
  for (let i = 0; i < Math.floor(filtered.length / 2); i++) {
    if (filtered[i] === filtered[filtered.length - 1 - i]) {
      bool = true;
    } else {
      return false;
    }
  }
  return bool;
};
