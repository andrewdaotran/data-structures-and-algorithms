// Take two sorted arrays and merge them into one sorted array

export const merge = (arr1, arr2) => {
	let newArr = []
	let i = 0
	let j = 0

	// while i < arr1.length || j < arr2.length
	// check if arr1[i] > arr[j], if so, push arr1[i] into newArr, else push arr2[j]
	// increase the letter ++

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			newArr.push(arr1[i])
			i++
		} else {
			newArr.push(arr2[j])
			j++
		}
	}
	while (i < arr1.length) {
		newArr.push(arr1[i])
		i++
	}

	while (j < arr2.length) {
		newArr.push(arr2[j])
		j++
	}

	return newArr
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100]))
