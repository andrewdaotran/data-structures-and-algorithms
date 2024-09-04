// Math.abs(num); Make sure we get the digit regardless if the num that was passed in is negative
// Math.pow(10, digit); Once you get the absolute number, you divide by the 10 to the power of the digit we would want
// Math.floor(); get rid of the decimal digits after the digit we want
// % 10; Getting the remainder of the floored number divided by 10 and return it as it is the digit we are looking for

export default getDigit = (num, digit) => {
  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
};

// Example getDigit(7328, 2)
// Math.abs(7328) = 7328
// Math.pow(10, 2) = 100
// 7328 / 100 = 73.28
// Math.floor(73.28) = 73
// 73 % 10 = 3
// Now we return the remainder, 3, which is the digit we are looking for
