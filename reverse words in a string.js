/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"

*/

const solution = (s) => {
  let a = s.trim().split(/\s+/);
  let result = "";
  for (let i = a.length - 1; i >= 0; i--) {
    result += a[i];
    if (i != 0) {
      result += " ";
    }
  }

  return result;
};

let s = "  My name is aqib";

console.log(solution(s));
