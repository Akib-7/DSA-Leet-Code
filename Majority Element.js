/*
Problem Description
 
 

Given an array of size N, find the majority element. The majority element is the element that appears more than floor(N/2) times.
You may assume that the array is non-empty and the majority element always exist in the array.

Problem Constraints
1 <= |A| <= 106
1 <= Ai <= 109

Input Format
The first argument is an integer array A.

Output Format
Return the majority element.

Example Input
A = [2, 1, 2]

Example Output
2

*/

//param A : array of integers
//return an integer
const solution = (A) => {
  var object = {};

  A.forEach((item) => {
    // item is present in object
    if (object[item]) {
      object[item] += 1;
    }

    // item not present in object
    else {
      object[item] = 1;
    }
  });

  for (const item in object) {
    if (object[item] > A.length / 2) {
      return item;
    }
  }
};
var A = [100];
console.log(solution(A));
