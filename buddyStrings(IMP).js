/*
Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 

Example 1:

Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
Example 2:

Input: s = "ab", goal = "ab"
Output: false
Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
Example 3:

Input: s = "aa", goal = "aa"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
*/

var buddyStrings = (s, goal) => {
  if (s.length !== goal.length) {
    return false;
  } else {
    if (s === goal) {
      console.log("in s==goal block");
      // we still have to swap at least once given the condition
      let set = new Set();
      for (const item of s) {
        if (set.has(item)) {
          // e.g., s=abcda, a swap can be performed
          return true;
        } else {
          set.add(item);
        }
      }
      // s==goal but we can't perform a single swap e.g., abcd
      return false;
    } else {
      console.log("in s!==goal block");
      // we can only perform 1 swap
      // if two strings differ at more than two indices then we return false because it will be no.of swap > 1
      // check conflict indices
      // simple for loop as lengths of two strings are same
      let arr = [];
      for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
          arr.push(i);
        }
      }

      if (arr.length > 2) {
        console.log("in length>2 block");
        return false;
      } else {
        console.log("in length==2 block");
        console.log(s);

        // Convert string to array to perform swap
        let sArray = s.split("");
        let temp = sArray[arr[0]];
        sArray[arr[0]] = sArray[arr[1]];
        sArray[arr[1]] = temp;

        // Convert array back to string
        let swappedS = sArray.join("");
        console.log(swappedS);

        return swappedS === goal;
      }
    }
  }
};

var s = "ab";
var goal = "ba"; // expected result: true

console.log(buddyStrings(s, goal));
