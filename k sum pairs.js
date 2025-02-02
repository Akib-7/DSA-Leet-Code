/*
You are given an integer array nums and an integer k.
In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
Return the maximum number of operations you can perform on the array.

Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.

*/

var maxOperations = (nums, k) => {
  var op = 0;
  nums = nums.sort((a, b) => a - b);
  var right = nums.length - 1;
  var left = 0;
  while (left < right) {
    var val = nums[left] + nums[right];
    if (val == k) {
      op++;
      left++;
      right--;
    } else if (val > k) {
      right--;
    } else {
      left++;
    }
  }
  return op;
};

var nums = [3, 1, 3, 4, 3];
var k = 6;
console.log(maxOperations(nums, k));
