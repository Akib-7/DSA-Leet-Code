/*
The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

It has a length of k.
It is a divisor of num.
Given integers num and k, return the k-beauty of num.

Note:

Leading zeros are allowed.
0 is not a divisor of any value.
A substring is a contiguous sequence of characters in a string.

*/

var divisorSubstrings = (num, k) => {
  // integer/array is given num
  // window size is given k
  // i need to check two conditions when window is hit
  // 1- substring is of length k(which will be automatically achieved once i hit the window)
  //2- num%substring==0
  // then count++(for counting no.of substrings which satisfy given conditions)
  var i = 0;
  var j = 0;
  var substring = "";
  var array = [];
  var s = num.toString();
  var count = 0;
  while (j < s.length) {
    // calculation
    substring += s[j];
    if (j - i + 1 < k) {
      j++;
    } else {
      if (j - i + 1 == k) {
        //find an answer from calculations using given conditions
        //convert substring to number
        array.push(substring);
        console.log(substring);
        substring = substring.substring(1);
        //at this point i have to update the substring
        // i need to remove the ith element of substring
        // such as substring.removeElementAtIndex(1)
        i++;
        j++;
      }
    }
  }

  console.log(array);
  array.forEach((item) => {
    var temp = parseInt(item, 10);
    if (temp !== 0 && num % temp == 0) {
      count++;
    }
  });

  return count;
};

var num = 10;
var k = 1;
console.log(divisorSubstrings(num, k));
