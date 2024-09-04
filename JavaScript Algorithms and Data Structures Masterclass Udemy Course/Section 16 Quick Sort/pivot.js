// Given an array, this helper function should designate an element as the pivot
// It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
// The order of teh elements on either side of the pivot doesn't matter
// The helper should do this in place, that is, it should not create a new array
// When complete, the helper should return the index of the pivot

// Picking a pivot
// The runtime of quick sort depends in part on how one selects the pivot
// Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
// For simplicity, we'll always choose the pivot to be the first element

import { swap } from '../utils.js'

const pivot = (arr, start = 0, end = arr.length + 1) => {
	let pivot = arr[start]
	let index = start

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			index++
			swap(arr, index, i)
		}
	}
	swap(arr, start, index)
	return index
	// return arr
}

console.log(pivot([3, 2, 1, 9, 11, 335, 0, 0.5, -1, -3]))

export default pivot
