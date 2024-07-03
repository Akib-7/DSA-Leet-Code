// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

var solution = (str1, str2) => {
  if (str1 + str2 != str2 + str1) {
    return "";
  }

  //Function of gcd
  let x = str1.length;
  let y = str2.length;

  let gcd = (x, y) => {
    if (y === 0) return x;
    return gcd(y, x % y);
  };

  var index = gcd(x, y);
  return str1.slice(0, index);
};
var str1 = "ABCDEF";
var str2 = "ABC";

console.log(solution(str1, str2));
