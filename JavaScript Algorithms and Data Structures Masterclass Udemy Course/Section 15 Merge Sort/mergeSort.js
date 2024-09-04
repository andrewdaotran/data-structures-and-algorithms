import { merge } from './merge.js'

const mergeSort = (arr) => {
	// continue to split the arr in half until we have arrays that are 0 or 1 in length
	if (arr.length <= 1) return arr
	let mid = Math.floor(arr.length / 2)

	// return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
	let arr1 = mergeSort(arr.slice(0, mid))
	let arr2 = mergeSort(arr.slice(mid))

	return merge(arr1, arr2)
}

console.log(mergeSort([0, 9, 20, 23, 100, 19, 18, 533]))
