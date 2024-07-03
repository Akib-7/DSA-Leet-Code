/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
*/
const solution = (s, a) => {
  // Convert the string to an array of characters
  let arr = s.split("");
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    if (a.includes(arr[l].toLowerCase()) && a.includes(arr[r].toLowerCase())) {
      // Swap characters
      let temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      l++;
      r--;
    } else if (
      a.includes(arr[l].toLowerCase()) &&
      !a.includes(arr[r].toLowerCase())
    ) {
      r--;
    } else if (
      !a.includes(arr[l].toLowerCase()) &&
      a.includes(arr[r].toLowerCase())
    ) {
      l++;
    } else {
      l++;
      r--;
    }
  }

  // Join the array back into a string
  return arr.join("");
};

// Example usage:
var a = ["a", "e", "i", "o", "u"];
let s = "hello";
console.log(solution(s, a)); // Output: "holle"
