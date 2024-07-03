/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.





*/

const solution = (x, n) => {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    // Check if the current spot is empty
    if (x[i] === 0) {
      // Check if the previous and next spots are also empty (or boundaries)
      let prev = i === 0 || x[i - 1] === 0;
      let next = i === x.length - 1 || x[i + 1] === 0;

      if (prev && next) {
        // Plant a flower
        x[i] = 1;
        count++;

        // Move to the next spot that is two positions ahead
        // to avoid adjacent planting
        i++;

        // If we've planted enough flowers, return true
        if (count >= n) {
          return true;
        }
      }
    }
  }

  // If not enough flowers were planted, return false
  return count >= n;
};

// Example usage:
let x = [1, 0, 0, 0, 1];
let n = 1;
console.log(solution(x, n)); // Output: true
