/*
We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.


Example 1:

Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
*/

var findLHS = function (nums) {
  nums = nums.sort((a, b) => a - b);

  var i = 0;
  var j = 0;
  var max = 0; // Initialize max to 0

  var map = new Map();
  nums.forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });

  if (map.size == 1) {
    return 0;
  }

  while (j < nums.length) {
    var value = nums[j] - nums[i];

    if (value < 1) {
      j++;
    } else if (value == 1) {
      var w = j - i + 1;
      if (w > max) {
        max = w;
      }
      j++;
    } else if (value > 1) {
      i++;
    }
  }

  return max;
};

var nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums)); // Should print 5
