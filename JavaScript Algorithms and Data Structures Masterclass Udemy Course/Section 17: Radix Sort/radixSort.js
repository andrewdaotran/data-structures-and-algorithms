import mostDigits from "./mostDigits.js";
import getDigit from "./getDigit.js";
import digitCount from "./digitCount.js";

const radixSort = (nums) => {
  let maxDigitcount = mostDigits(nums);
  for (let k = 0; k < maxDigitcount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      // digitBuckets[getDigit(nums[i], k)].push(nums[i]); One liner for below
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
  }
};

radixSort([23, 345, 5467, 12, 2345, 9852]);
