function isPalindrome(word) {
  // Write your algorithm here
  const length = word.length;
  const mid = Math.floor(length/2);

  for ( let i = 0; i < mid; i++ ) {
      if (word[i] !== word[length - 1 - i]) {
          return false;
      }
  }
  return true;
}
/* 
  Add your pseudocode here
  Create a variable to store the value of the length of the palindrome
  Devide the value stored by 2, then round the number down to the nearest integer
  Loop through the letters in the word and return if true or false
*/

/*
  Add written explanation of your solution here
  The for loop compares the first letter to the last letter,
  second letter to the second last letter,
  third letter to the third last letter and so on
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
