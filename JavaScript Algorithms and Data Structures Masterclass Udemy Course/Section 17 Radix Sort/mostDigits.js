import digitCount from "./digitCount.js";

export default mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

// Example mostDigits([93, 205, 1, 39, 8002])
// The code will loop through the array and reassign maxDigits to whichever has the most digits between the current maxDigits and the digitCount of the array at the certain i index
// We return the maxDigits at the end
