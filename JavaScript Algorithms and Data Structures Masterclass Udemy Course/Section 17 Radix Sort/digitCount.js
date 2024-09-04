export default digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// Example digitCount(423)
// Math.abs(423) = 423
// Math.log10(423) = 2.6263403673750423; don't worry about the math
// Math.floor(2.6263403673750423) = 2
// 2 + 1 = 3; which is how many digits our passed in num has
