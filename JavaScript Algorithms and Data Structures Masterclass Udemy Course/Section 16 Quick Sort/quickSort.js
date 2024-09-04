// Call the pivot helper on the array
// When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
// This happens in place without creating new arrays
// Your base case occurs when you consider a subarray with less than 2 elements

import pivot from "./pivot.js";

// const quickSort = ( arr, start, end) => {
//   if (start === end) return
//   let index = pivot( arr )
//   quickSort( arr, 0, index )
//   quickSort(arr, index)

// }

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};

console.log(quickSort([3, 2, 1, 9, 11, 335, 0, 0.5, -1, -3]));
