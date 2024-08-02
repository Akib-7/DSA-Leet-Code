/*
Given two arrays of strings list1 and list2, find the common strings with the least index sum.

A common string is a string that appeared in both list1 and list2.

A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

Return all the common strings with the least index sum. Return the answer in any order.

 

Example 1:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only common string is "Shogun".
 */

var findRestaurant = function (list1, list2) {
  var output = [];
  var min = Infinity;
  var fmap = new Map();
  var sum = 0;
  list1.forEach((item, index) => {
    fmap.set(item, index);
  });
  // console.log(fmap)
  for (var i = 0; i < list2.length; i++) {
    if (fmap.has(list2[i])) {
      // console.log("MAP ITEM"+ fmap.get(list2[i]))
      sum = fmap.get(list2[i]) + i;

      //console.log("SUM " +sum)
      if (min > sum) {
        min = sum;
        output = [list2[i]];
      } else if (min == sum) {
        output.push(list2[i]);
      }
    }
    sum = 0;
  }
  return output;
};
